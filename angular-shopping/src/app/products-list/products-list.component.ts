import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit{

    constructor(private shoppingService: ShoppingService){}

    products;
    
    getProducts(){
        this.shoppingService.getProducts();
    }

    ngOnInit(){
        //esta es la manera de recorrer un JSON
        this.shoppingService.getProducts().subscribe((data: any) => {
            console.log(data);
            this.products = data;
        });
    }

}