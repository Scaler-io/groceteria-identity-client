import {
  AppCountActions,
  GET_API_CLIENT_COUNT_SUCCESS,
} from './app-count.action';

export const APP_COUNT_STATE_NAME = 'appCount';

export interface AppCountState {
  apiClientCount: number;
}

const initialState: AppCountState = {
  apiClientCount: 0,
};

export function appCountReducer(
  state: AppCountState = initialState,
  action: AppCountActions
) {
  switch (action.type) {
    case GET_API_CLIENT_COUNT_SUCCESS:
      return {
        ...state,
        apiClientCount: action.payload,
      };
    default:
      return state;
  }
}
