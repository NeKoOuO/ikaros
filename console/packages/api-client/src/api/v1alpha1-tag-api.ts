/* tslint:disable */
/* eslint-disable */
/**
 * Ikaros Open API Documentation
 * Documentation for Ikaros Open API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { AttachmentTag } from "../models";
// @ts-ignore
import { SubjectTag } from "../models";
// @ts-ignore
import { Tag } from "../models";
/**
 * V1alpha1TagApi - axios parameter creator
 * @export
 */
export const V1alpha1TagApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create tag
     * @param {Tag} [tag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTag: async (
      tag?: Tag,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/tag`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        tag,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List attachment tags by attachment id.
     * @param {number} attachmentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAttachmentTagsByAttachmentId: async (
      attachmentId: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'attachmentId' is not null or undefined
      assertParamExists(
        "listAttachmentTagsByAttachmentId",
        "attachmentId",
        attachmentId
      );
      const localVarPath =
        `/api/v1alpha1/tags/attachment/attachmentId/{attachmentId}`.replace(
          `{${"attachmentId"}}`,
          encodeURIComponent(String(attachmentId))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List subject tags by subject id.
     * @param {number} subjectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubjectTagsBySubjectId: async (
      subjectId: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'subjectId' is not null or undefined
      assertParamExists("listSubjectTagsBySubjectId", "subjectId", subjectId);
      const localVarPath =
        `/api/v1alpha1/tags/subject/subjectId/{subjectId}`.replace(
          `{${"subjectId"}}`,
          encodeURIComponent(String(subjectId))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List tags by condition.
     * @param {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'} [type]
     * @param {number} [masterId]
     * @param {number} [userId]
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTagsByCondition: async (
      type?: "SUBJECT" | "EPISODE" | "ATTACHMENT",
      masterId?: number,
      userId?: number,
      name?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/tags/condition`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (masterId !== undefined) {
        localVarQueryParameter["masterId"] = masterId;
      }

      if (userId !== undefined) {
        localVarQueryParameter["userId"] = userId;
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Remove tag by condition.
     * @param {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'} [type]
     * @param {number} [masterId]
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeTagByCondition: async (
      type?: "SUBJECT" | "EPISODE" | "ATTACHMENT",
      masterId?: number,
      name?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/tag/condition`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (masterId !== undefined) {
        localVarQueryParameter["masterId"] = masterId;
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Remove tag by id.
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeTagById: async (
      id: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("removeTagById", "id", id);
      const localVarPath = `/api/v1alpha1/tag/id/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * V1alpha1TagApi - functional programming interface
 * @export
 */
export const V1alpha1TagApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    V1alpha1TagApiAxiosParamCreator(configuration);
  return {
    /**
     * Create tag
     * @param {Tag} [tag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTag(
      tag?: Tag,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTag(
        tag,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List attachment tags by attachment id.
     * @param {number} attachmentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAttachmentTagsByAttachmentId(
      attachmentId: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AttachmentTag>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAttachmentTagsByAttachmentId(
          attachmentId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List subject tags by subject id.
     * @param {number} subjectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSubjectTagsBySubjectId(
      subjectId: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SubjectTag>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listSubjectTagsBySubjectId(
          subjectId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List tags by condition.
     * @param {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'} [type]
     * @param {number} [masterId]
     * @param {number} [userId]
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTagsByCondition(
      type?: "SUBJECT" | "EPISODE" | "ATTACHMENT",
      masterId?: number,
      userId?: number,
      name?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Tag>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listTagsByCondition(
          type,
          masterId,
          userId,
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Remove tag by condition.
     * @param {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'} [type]
     * @param {number} [masterId]
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeTagByCondition(
      type?: "SUBJECT" | "EPISODE" | "ATTACHMENT",
      masterId?: number,
      name?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.removeTagByCondition(
          type,
          masterId,
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Remove tag by id.
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeTagById(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.removeTagById(
        id,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * V1alpha1TagApi - factory interface
 * @export
 */
export const V1alpha1TagApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = V1alpha1TagApiFp(configuration);
  return {
    /**
     * Create tag
     * @param {V1alpha1TagApiCreateTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTag(
      requestParameters: V1alpha1TagApiCreateTagRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Tag> {
      return localVarFp
        .createTag(requestParameters.tag, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List attachment tags by attachment id.
     * @param {V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAttachmentTagsByAttachmentId(
      requestParameters: V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Array<AttachmentTag>> {
      return localVarFp
        .listAttachmentTagsByAttachmentId(
          requestParameters.attachmentId,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List subject tags by subject id.
     * @param {V1alpha1TagApiListSubjectTagsBySubjectIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubjectTagsBySubjectId(
      requestParameters: V1alpha1TagApiListSubjectTagsBySubjectIdRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Array<SubjectTag>> {
      return localVarFp
        .listSubjectTagsBySubjectId(requestParameters.subjectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List tags by condition.
     * @param {V1alpha1TagApiListTagsByConditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTagsByCondition(
      requestParameters: V1alpha1TagApiListTagsByConditionRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Array<Tag>> {
      return localVarFp
        .listTagsByCondition(
          requestParameters.type,
          requestParameters.masterId,
          requestParameters.userId,
          requestParameters.name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Remove tag by condition.
     * @param {V1alpha1TagApiRemoveTagByConditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeTagByCondition(
      requestParameters: V1alpha1TagApiRemoveTagByConditionRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .removeTagByCondition(
          requestParameters.type,
          requestParameters.masterId,
          requestParameters.name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Remove tag by id.
     * @param {V1alpha1TagApiRemoveTagByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeTagById(
      requestParameters: V1alpha1TagApiRemoveTagByIdRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .removeTagById(requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createTag operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiCreateTagRequest
 */
export interface V1alpha1TagApiCreateTagRequest {
  /**
   *
   * @type {Tag}
   * @memberof V1alpha1TagApiCreateTag
   */
  readonly tag?: Tag;
}

/**
 * Request parameters for listAttachmentTagsByAttachmentId operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest
 */
export interface V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest {
  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiListAttachmentTagsByAttachmentId
   */
  readonly attachmentId: number;
}

/**
 * Request parameters for listSubjectTagsBySubjectId operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiListSubjectTagsBySubjectIdRequest
 */
export interface V1alpha1TagApiListSubjectTagsBySubjectIdRequest {
  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiListSubjectTagsBySubjectId
   */
  readonly subjectId: number;
}

/**
 * Request parameters for listTagsByCondition operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiListTagsByConditionRequest
 */
export interface V1alpha1TagApiListTagsByConditionRequest {
  /**
   *
   * @type {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'}
   * @memberof V1alpha1TagApiListTagsByCondition
   */
  readonly type?: "SUBJECT" | "EPISODE" | "ATTACHMENT";

  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiListTagsByCondition
   */
  readonly masterId?: number;

  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiListTagsByCondition
   */
  readonly userId?: number;

  /**
   *
   * @type {string}
   * @memberof V1alpha1TagApiListTagsByCondition
   */
  readonly name?: string;
}

/**
 * Request parameters for removeTagByCondition operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiRemoveTagByConditionRequest
 */
export interface V1alpha1TagApiRemoveTagByConditionRequest {
  /**
   *
   * @type {'SUBJECT' | 'EPISODE' | 'ATTACHMENT'}
   * @memberof V1alpha1TagApiRemoveTagByCondition
   */
  readonly type?: "SUBJECT" | "EPISODE" | "ATTACHMENT";

  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiRemoveTagByCondition
   */
  readonly masterId?: number;

  /**
   *
   * @type {string}
   * @memberof V1alpha1TagApiRemoveTagByCondition
   */
  readonly name?: string;
}

/**
 * Request parameters for removeTagById operation in V1alpha1TagApi.
 * @export
 * @interface V1alpha1TagApiRemoveTagByIdRequest
 */
export interface V1alpha1TagApiRemoveTagByIdRequest {
  /**
   *
   * @type {number}
   * @memberof V1alpha1TagApiRemoveTagById
   */
  readonly id: number;
}

/**
 * V1alpha1TagApi - object-oriented interface
 * @export
 * @class V1alpha1TagApi
 * @extends {BaseAPI}
 */
export class V1alpha1TagApi extends BaseAPI {
  /**
   * Create tag
   * @param {V1alpha1TagApiCreateTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public createTag(
    requestParameters: V1alpha1TagApiCreateTagRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .createTag(requestParameters.tag, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List attachment tags by attachment id.
   * @param {V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public listAttachmentTagsByAttachmentId(
    requestParameters: V1alpha1TagApiListAttachmentTagsByAttachmentIdRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .listAttachmentTagsByAttachmentId(requestParameters.attachmentId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List subject tags by subject id.
   * @param {V1alpha1TagApiListSubjectTagsBySubjectIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public listSubjectTagsBySubjectId(
    requestParameters: V1alpha1TagApiListSubjectTagsBySubjectIdRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .listSubjectTagsBySubjectId(requestParameters.subjectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List tags by condition.
   * @param {V1alpha1TagApiListTagsByConditionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public listTagsByCondition(
    requestParameters: V1alpha1TagApiListTagsByConditionRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .listTagsByCondition(
        requestParameters.type,
        requestParameters.masterId,
        requestParameters.userId,
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Remove tag by condition.
   * @param {V1alpha1TagApiRemoveTagByConditionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public removeTagByCondition(
    requestParameters: V1alpha1TagApiRemoveTagByConditionRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .removeTagByCondition(
        requestParameters.type,
        requestParameters.masterId,
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Remove tag by id.
   * @param {V1alpha1TagApiRemoveTagByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1TagApi
   */
  public removeTagById(
    requestParameters: V1alpha1TagApiRemoveTagByIdRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1TagApiFp(this.configuration)
      .removeTagById(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
