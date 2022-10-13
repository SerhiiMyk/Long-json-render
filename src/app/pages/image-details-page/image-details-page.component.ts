import { Component, OnDestroy, OnInit } from '@angular/core';
import { IimgObj } from '../../interfaces/img-obj.interface';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../../services/json.service';
import { select, Store } from '@ngrx/store';
import { selectImgObjById } from '../../store/selectors/image.selector';
import { UPDATE_STATE_ITEM } from '../../store/actions/image.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-details-page',
  templateUrl: './image-details-page.component.html',
  styleUrls: ['./image-details-page.component.scss']
})
export class ImageDetailsPageComponent implements OnInit, OnDestroy {

  imgObj!: IimgObj;
  private sub!: Subscription;

  constructor(private store: Store, private jsonService: JsonService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.jsonService.generateImageJson();
    let id = this.activatedRoute.snapshot.params['id'];
    // get current item by url id using store selector
    this.sub = this.store.pipe(select(selectImgObjById(+id))).subscribe(data => this.imgObj = data);
  }

  // update current item in store state ( create new property in item depending on wishlist value)
  updateImgObj(wishlist: boolean) {
    this.store.dispatch(UPDATE_STATE_ITEM({ newItem: { ...this.imgObj, wishlist: wishlist } }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
