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

// May contain unused imports in some cases
// @ts-ignore
import { Episode } from "./episode";
// May contain unused imports in some cases
// @ts-ignore
import { SubjectSync } from "./subject-sync";

/**
 *
 * @export
 * @interface Subject
 */
export interface Subject {
  /**
   *
   * @type {number}
   * @memberof Subject
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  type: SubjectTypeEnum;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  infobox?: string;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  summary?: string;
  /**
   *
   * @type {boolean}
   * @memberof Subject
   */
  nsfw: boolean;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  airTime?: string;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  cover?: string;
  /**
   *
   * @type {Array<Episode>}
   * @memberof Subject
   */
  episodes?: Array<Episode>;
  /**
   *
   * @type {Array<SubjectSync>}
   * @memberof Subject
   */
  syncs?: Array<SubjectSync>;
  /**
   *
   * @type {boolean}
   * @memberof Subject
   */
  canRead?: boolean;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  name_cn?: string;
  /**
   *
   * @type {number}
   * @memberof Subject
   */
  total_episodes?: number;
  /**
   *
   * @type {string}
   * @memberof Subject
   */
  collection_status?: SubjectCollectionStatusEnum;
}

export const SubjectTypeEnum = {
  Anime: "ANIME",
  Comic: "COMIC",
  Game: "GAME",
  Music: "MUSIC",
  Novel: "NOVEL",
  Real: "REAL",
  Other: "OTHER",
} as const;

export type SubjectTypeEnum =
  (typeof SubjectTypeEnum)[keyof typeof SubjectTypeEnum];
export const SubjectCollectionStatusEnum = {
  Wish: "WISH",
  Doing: "DOING",
  Done: "DONE",
  Shelve: "SHELVE",
  Discard: "DISCARD",
} as const;

export type SubjectCollectionStatusEnum =
  (typeof SubjectCollectionStatusEnum)[keyof typeof SubjectCollectionStatusEnum];
