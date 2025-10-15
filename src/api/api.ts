import request from '@/utils/request';
const appid = 'wx83d751801e23f53d';

const host = 'https://cost.xx.com/api';

//api_person_info 获取用户信息
export const getPersonInfo = (data?: any) => {
    return request('/api_person_info', 'get', data);
};

export const wechatPay = (data?: any) => {
    return request('/wechatPay', 'get', data);
};



