import { Component, OnInit } from '@angular/core';
import { MockData } from '../../mock/data.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList = MockData
  constructor() { }

  ngOnInit(): void {
  }

}
