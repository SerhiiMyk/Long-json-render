import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IimgObj } from '../../interfaces/img-obj.interface';

export const selectImgData = createFeatureSelector<IimgObj[]>('data');
export const selectImgObjById = (id: number) => createSelector(selectImgData, (items: IimgObj[]) => {
  return items.filter((item: IimgObj) => item.id === id)[0];
});
