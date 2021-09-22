import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!: number;
  name!: string;
  price!: number;
  quantity!: number;
  list: Product[] = [
    {
      id: 1,
      name: "keo",
      price: 3000,
      quantity: 5
    },
    {
      id:2,
      name: "snack",
      price: 5000,
      quantity: 10
    },
    {
      id:3,
      name: "sting",
      price: 10000,
      quantity: 10
    },
    {
      id:4,
      name: "redbull",
      price: 11000,
      quantity: 10
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  create(id: number, name: string, price: number, quantity: number) {
    this.list.push({id, name, price, quantity})
  }

  edit(id: number, name: string, price: number, quantity: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list[i] = {id,name,price,quantity}
      }
    }
  }

  delete(id: any){
    this.list = this.list.filter(product => {
      return product.id !== id;
    })
  }

}
