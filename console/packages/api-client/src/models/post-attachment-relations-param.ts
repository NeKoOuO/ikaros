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

/**
 *
 * @export
 * @interface PostAttachmentRelationsParam
 */
export interface PostAttachmentRelationsParam {
  /**
   * Master attachment id.
   * @type {number}
   * @memberof PostAttachmentRelationsParam
   */
  masterId: number;
  /**
   * Type of attachment.
   * @type {string}
   * @memberof PostAttachmentRelationsParam
   */
  type: PostAttachmentRelationsParamTypeEnum;
  /**
   * Related attachment ids.
   * @type {Array<number>}
   * @memberof PostAttachmentRelationsParam
   */
  relationIds: Array<number>;
}

export const PostAttachmentRelationsParamTypeEnum = {
  VideoSubtitle: "VIDEO_SUBTITLE",
} as const;

export type PostAttachmentRelationsParamTypeEnum =
  (typeof PostAttachmentRelationsParamTypeEnum)[keyof typeof PostAttachmentRelationsParamTypeEnum];