import { Component, Input } from '@angular/core';
import { IimgObj } from '../../interfaces/img-obj.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() imgObj!: IimgObj;

}
