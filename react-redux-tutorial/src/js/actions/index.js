import { ADD_ARTICLE } from "../constants/action-types";
import { DEL_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload};
}

export function delArticle(payload) {
    return { type: DEL_ARTICLE, payload};
}