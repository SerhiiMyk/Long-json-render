import { createAction, props } from '@ngrx/store';
import { IimgObj } from '../../interfaces/img-obj.interface';

export const GET_IMAGES = createAction('[IMAGES] GET_IMAGES');
export const GET_IMAGES_SUCCESS = createAction('[IMAGES] GET_IMAGES_SUCCESS', props<{ data: string }>());
export const UPDATE_STATE_ITEM = createAction('[IMAGES] UPDATE_STATE_ITEM', props<{ newItem: IimgObj }>());
