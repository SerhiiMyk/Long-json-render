import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GET_IMAGES } from '../../store/actions/image.actions';
import { Observable } from 'rxjs';
import { IimgObj } from '../../interfaces/img-obj.interface';
import { selectImgData } from '../../store/selectors/image.selector';

@Component({
  selector: 'app-image-list-page',
  templateUrl: './image-list-page.component.html',
  styleUrls: ['./image-list-page.component.scss']
})
export class ImageListPageComponent implements OnInit {

  imgData$: Observable<IimgObj[]> = this.store.pipe(select(selectImgData))

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(GET_IMAGES())
    this.imgData$ = this.store.pipe(select(selectImgData))
  }
}
