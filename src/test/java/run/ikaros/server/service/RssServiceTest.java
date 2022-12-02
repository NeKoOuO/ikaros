package run.ikaros.server.service;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.client.RestTemplate;
import run.ikaros.server.core.service.RssService;
import run.ikaros.server.tripartite.mikan.model.MikanRssItem;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author li-guohao
 */
class RssServiceTest {

    RssService rssService = new RssServiceImpl(Mockito.mock(OptionServiceImpl.class));

    /**
     * need add run env config: IKAROS_TEST_RSS_MIKAN_MY_SUB_URL=http://xxxxx
     */
    // @Test
    void parseMikanMySubscribeRss() {
        final String url = System.getenv("IKAROS_TEST_RSS_MIKAN_MY_SUB_URL");
        List<MikanRssItem> mikanRssItemList = rssService.parseMikanMySubscribeRss(url);
        assertThat(mikanRssItemList).isNotEmpty();
    }

    /**
     * need add run env config: IKAROS_TEST_RSS_MIKAN_MY_SUB_URL=http://xxxxx
     */
    // @Test
    void downloadRssXmlFile() {
        final String url = System.getenv("IKAROS_TEST_RSS_MIKAN_MY_SUB_URL");
        String downloadRssXmlFile = rssService.downloadRssXmlFile(url);

        assertThat(downloadRssXmlFile).isNotBlank();
    }
}