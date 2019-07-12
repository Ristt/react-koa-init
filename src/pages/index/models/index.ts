import { urlAdress } from '@/utils/config';
import { Toast } from 'antd-mobile';
import axios from 'axios';
import { resolve } from 'url';
const defaultState = {
  defaultData: 1,
  infoList: [],
};
export default {
  namespace: 'index',
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'userList',
            payload: {},
          });
          // 进入页面刷新
          dispatch({
            type: 'updateState',
            payload: defaultState,
          });
        }
      });
    },
  },
  state: defaultState,

  effects: {
    // 获取用户列表
    *userList({ payload }, { call, put }) {
      let resultData;
      let res = yield axios.get(urlAdress);
      if (res.data.code > 0) {
        resultData = res.data.response;
      }

      yield put({
        type: 'updateState',
        payload: {
          infoList: resultData,
        },
      });
    },
    // 增加用户
    *addList({ payload }, { call, put }) {
      const { username = '' } = payload;
      let res = yield axios.get(`${urlAdress}?username=${username}`);
      //   if(){}
    },
    // 删除用户
    // 查询用户
    // 改变用户
  },

  reducers: {
    updateState(state: any, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
