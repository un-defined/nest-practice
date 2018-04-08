import * as config from 'config';

const CORE_CTX = `${config.coreUrl}:${config.corePort}/YJSCoreApi/http`;        // 核心系统前缀

export const requestUrl = {
    /* 核心系统 */
    LOGIN: `${CORE_CTX}/wpt/base/login`,                                        // 登录
    MODIFY_PWD: `${CORE_CTX}/wpt/base/modifyPwd`,                               // 用户修改密码
};