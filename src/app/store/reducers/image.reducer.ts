import { createReducer, on } from '@ngrx/store';
import { GET_IMAGES_SUCCESS, UPDATE_STATE_ITEM } from '../actions/image.actions';
import { IimgObj } from '../../interfaces/img-obj.interface';
import * as _ from 'lodash';


export const initialState: IimgObj[] = [];

export const imageReducer = createReducer(
  initialState,
  on(GET_IMAGES_SUCCESS, (state, action) => [...JSON.parse(action.data)]),
  on(UPDATE_STATE_ITEM, (state, action) => {
    return _.map([...state], (item: IimgObj) => {
      if (item.id === action.newItem.id) {
        return action.newItem;
      } else {
        return item;
      }
    });
  }),
);
