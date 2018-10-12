import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Category }    from 'classes/category'
import { CatsService } from 'services/cats/cats.service';

@Component({
  selector:    'app-cats',
  templateUrl: './cat.component.html',
  styleUrls:  ['./cat.component.css']
})
export class CatComponent implements OnInit {


  category:   Category;
  categories: Category[];

  constructor(
    private CS: CatsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getCategory();
  }

  getCategories(): void {
    this.CS.getCategories().subscribe(cats => this.categories = cats)
  }

  getCategory(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.CS.getCategory("popolnit-mobilnyy")
      .subscribe(cat => this.category = cat);
  }

}
