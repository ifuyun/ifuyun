/**
 * 错误码
 * @author fuyun
 * @since 3.0.0
 * @version 3.0.0
 */
const ERROR_CODES = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    SERVER_ERROR: 500,
    POST_NOT_EXIST: 800,
    POST_SAVE_ERROR: 801,
    POST_COMMENT_CLOSED: 802,
    CATEGORY_NOT_EXIST: 820,
    CATEGORY_INVISIBLE: 821,
    CATEGORY_QUERY_ERROR: 822,
    TAXONOMY_SLUG_DUPLICATE: 830,
    TAXONOMY_REMOVE_ERROR: 831,
    LINK_SAVE_ERROR: 840,
    LINK_REMOVE_ERROR: 841,
    LOGIN_ERROR: 860,
    FORM_INPUT_ERROR: 870,
    UPLOAD_ERROR: 880
};

module.exports = ERROR_CODES;
