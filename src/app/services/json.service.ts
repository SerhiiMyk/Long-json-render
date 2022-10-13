import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

 //generate json with 1000 items
  generateImageJson(): Observable<string> {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push({ id: i + 1, title: `image-${ i + 1 }`, url: `https://picsum.photos/id/${ i + 1 }/200/200` });
    }
    return of(JSON.stringify(arr));
  }
}
