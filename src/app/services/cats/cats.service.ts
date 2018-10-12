import { Injectable }     from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category }   from 'classes/category';
import { CATEGORIES } from 'mocks/categories';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(path: String): Observable<Category> {
    path = "/" + path;
    for( let i = CATEGORIES.length; i;) {
      let cat: Category = CATEGORIES[--i];
      if ( cat.path === path) {      
        return of(cat);
      }
    }
    return of(null);
  }

}
