package run.ikaros.server.core.user;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.reactive.server.SecurityMockServerConfigurers.csrf;
import static run.ikaros.server.core.user.UserService.DEFAULT_PASSWORD_ENCODING_ID_PREFIX;
import static run.ikaros.server.test.TestConst.PROCESS_SHOULD_NOT_RUN_TO_THIS;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;
import run.ikaros.server.infra.constant.AppConst;
import run.ikaros.server.infra.constant.SecurityConst;
import run.ikaros.server.infra.exception.NotFoundException;
import run.ikaros.server.store.entity.UserEntity;

@SpringBootTest
@AutoConfigureWebTestClient
class UserServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    WebTestClient webClient;
    @SpyBean
    ReactiveUserDetailsService userDetailsService;

    @BeforeEach
    void setUp() {
        when(userDetailsService.findByUsername("user"))
            .thenReturn(Mono.just(
                org.springframework.security.core.userdetails.User.builder()
                    .username("user")
                    .password("password")
                    .passwordEncoder(passwordEncoder::encode)
                    .roles(SecurityConst.ROLE_MASTER)
                    .build()
            ));

        webClient = webClient.mutateWith(csrf());
    }

    @AfterEach
    void tearDown() {
        userService.deleteAll().block();
    }

    @Test
    void addEncodingIdPrefixIfNotExists() {
        try {
            UserService.addEncodingIdPrefixIfNotExists("");
            fail(PROCESS_SHOULD_NOT_RUN_TO_THIS);
        } catch (IllegalArgumentException e) {
            assertThat(e.getMessage()).isEqualTo("'rawPassword' must has text");
        }

        String password = "password";

        assertThat(UserService.addEncodingIdPrefixIfNotExists(password))
            .isEqualTo(DEFAULT_PASSWORD_ENCODING_ID_PREFIX + password);
        assertThat(UserService.addEncodingIdPrefixIfNotExists(
            DEFAULT_PASSWORD_ENCODING_ID_PREFIX + password))
            .isEqualTo(DEFAULT_PASSWORD_ENCODING_ID_PREFIX + password);
    }

    @Test
    void getUser() {
        final String test1 = "test1";
        // create user
        Mono.just(UserEntity.builder()
                .username(test1)
                .password("old password")
                .build())
            .map(User::new)
            .flatMap(userService::save)
            .block();


        // verify get user
        StepVerifier.create(
                userService.getUser(test1)
                    .map(User::entity)
                    .flatMap(userEntity -> Mono.just(userEntity.getUsername())))
            .expectNext(test1)
            .verifyComplete();

        // verify throw UserNotFoundException when get not exists user
        StepVerifier.create(userService.getUser("not-exists-user"))
            .expectError(NotFoundException.class)
            .verify();
    }

    @Test
    void updatePassword() {
        final String username = "test1";
        final String oldPassword = "old password";
        final String newPassword = "new password";
        // create user
        Mono.just(UserEntity.builder()
                .username(username)
                .password(oldPassword)
                .build())
            .map(User::new)
            .flatMap(userService::save)
            .block();

        Mono<String> encodedPasswordMono = userService.getUser(username)
            .map(User::entity)
            .flatMap(userEntity -> Mono.just(userEntity.getPassword()))
            .map(UserService::addEncodingIdPrefixIfNotExists);

        StepVerifier.create(
                encodedPasswordMono
                    .flatMap(encodedPassword -> Mono.just(
                        passwordEncoder.matches(oldPassword,
                            encodedPassword)))
            ).expectNext(Boolean.TRUE)
            .verifyComplete();

        // update user password
        userService.updatePassword(username, newPassword).block();

        StepVerifier.create(
                encodedPasswordMono
                    .flatMap(encodedPassword -> Mono.just(
                        passwordEncoder.matches(oldPassword, encodedPassword)
                    ))
            ).expectNext(Boolean.FALSE)
            .verifyComplete();
        StepVerifier.create(
                encodedPasswordMono
                    .flatMap(encodedPassword -> Mono.just(
                        passwordEncoder.matches(newPassword, encodedPassword)
                    ))
            ).expectNext(Boolean.TRUE)
            .verifyComplete();

        // update by same password
        userService.updatePassword(username, newPassword).block();
        StepVerifier.create(
                encodedPasswordMono
                    .flatMap(encodedPassword -> Mono.just(
                        passwordEncoder.matches(newPassword, encodedPassword)
                    ))
            ).expectNext(Boolean.TRUE)
            .verifyComplete();

        // update by not same password
        final String newPassword2 = "newPassword2";
        userService.updatePassword(username, newPassword2).block();
        StepVerifier.create(
                encodedPasswordMono
                    .flatMap(encodedPassword -> Mono.just(
                        passwordEncoder.matches(newPassword2, encodedPassword)
                    ))
            ).expectNext(Boolean.TRUE)
            .verifyComplete();
    }

    @Test
    void getCurrentLoginUserIdWhenUserNotLogin() {
        Assertions.assertThat(UserService.getCurrentLoginUserId())
            .isEqualTo(SecurityConst.UID_WHEN_NO_AUTH);
    }

    @Test
    void getCurrentLoginUserIdWhenUserHasLogin() {
        webClient
            .post()
            .uri("/login")
            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
            .body(BodyInserters.fromFormData("username", "user")
                .with("password", "password"))
            .exchange()
            .expectStatus().is3xxRedirection()
            .expectHeader().location(AppConst.LOGIN_SUCCESS_LOCATION);

        // todo verify get current login user id after login
    }
}