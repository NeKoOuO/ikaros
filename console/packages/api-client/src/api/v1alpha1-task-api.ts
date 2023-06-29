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

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
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
} from '../common';
// @ts-ignore
import {
	BASE_PATH,
	COLLECTION_FORMATS,
	RequestArgs,
	BaseAPI,
	RequiredError,
} from '../base';
// @ts-ignore
import { TaskEntity } from '../models';
/**
 * V1alpha1TaskApi - axios parameter creator
 * @export
 */
export const V1alpha1TaskApiAxiosParamCreator = function (
	configuration?: Configuration
) {
	return {
		/**
		 *
		 * @param {string} name
		 * @param {TaskEntity} [taskEntity]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findTaskByName: async (
			name: string,
			taskEntity?: TaskEntity,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'name' is not null or undefined
			assertParamExists('findTaskByName', 'name', name);
			const localVarPath = `/api/v1alpha1/task/name/{name}`.replace(
				`{${'name'}}`,
				encodeURIComponent(String(name))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'GET',
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

			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				taskEntity,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * V1alpha1TaskApi - functional programming interface
 * @export
 */
export const V1alpha1TaskApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		V1alpha1TaskApiAxiosParamCreator(configuration);
	return {
		/**
		 *
		 * @param {string} name
		 * @param {TaskEntity} [taskEntity]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async findTaskByName(
			name: string,
			taskEntity?: TaskEntity,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.findTaskByName(
				name,
				taskEntity,
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
 * V1alpha1TaskApi - factory interface
 * @export
 */
export const V1alpha1TaskApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = V1alpha1TaskApiFp(configuration);
	return {
		/**
		 *
		 * @param {V1alpha1TaskApiFindTaskByNameRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findTaskByName(
			requestParameters: V1alpha1TaskApiFindTaskByNameRequest,
			options?: AxiosRequestConfig
		): AxiosPromise<void> {
			return localVarFp
				.findTaskByName(
					requestParameters.name,
					requestParameters.taskEntity,
					options
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * Request parameters for findTaskByName operation in V1alpha1TaskApi.
 * @export
 * @interface V1alpha1TaskApiFindTaskByNameRequest
 */
export interface V1alpha1TaskApiFindTaskByNameRequest {
	/**
	 *
	 * @type {string}
	 * @memberof V1alpha1TaskApiFindTaskByName
	 */
	readonly name: string;

	/**
	 *
	 * @type {TaskEntity}
	 * @memberof V1alpha1TaskApiFindTaskByName
	 */
	readonly taskEntity?: TaskEntity;
}

/**
 * V1alpha1TaskApi - object-oriented interface
 * @export
 * @class V1alpha1TaskApi
 * @extends {BaseAPI}
 */
export class V1alpha1TaskApi extends BaseAPI {
	/**
	 *
	 * @param {V1alpha1TaskApiFindTaskByNameRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof V1alpha1TaskApi
	 */
	public findTaskByName(
		requestParameters: V1alpha1TaskApiFindTaskByNameRequest,
		options?: AxiosRequestConfig
	) {
		return V1alpha1TaskApiFp(this.configuration)
			.findTaskByName(
				requestParameters.name,
				requestParameters.taskEntity,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}
}