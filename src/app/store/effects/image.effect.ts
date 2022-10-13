import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, switchMap, withLatestFrom } from 'rxjs';
import { GET_IMAGES, GET_IMAGES_SUCCESS } from '../actions/image.actions';
import { JsonService } from '../../services/json.service';
import { selectImgData } from '../selectors/image.selector';


@Injectable()
export class ImageEffects {
  constructor(private store: Store,
              private actions$: Actions,
              private jsonService: JsonService) {
  }

  getImgJson = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_IMAGES),
      withLatestFrom(this.store.pipe(select(selectImgData))),
      switchMap(([, store]) => {
          if (store.length > 0) {
            return EMPTY;
          }
          return this.jsonService.generateImageJson().pipe(
            map(response => GET_IMAGES_SUCCESS({ data: response })));
        }
      )
    )
  );
}
