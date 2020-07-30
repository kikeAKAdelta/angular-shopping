import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../shopping.service';

@Component ({
    selector: 'product-list-details',
    templateUrl: './product-list-details.component.html',
    styleUrls: ['./product-list-details.component.css']
})

export class ProductListDetailsComponent implements OnInit{

    product;

    constructor(private route: ActivatedRoute, private shoppingService: ShoppingService){
    }

    ngOnInit(){
        this.route.paramMap.subscribe(params => {

            this.shoppingService.getProducts().subscribe((data: any) => {
                this.product = data[+params.get('productId')];
            });
            
        });
    }

}