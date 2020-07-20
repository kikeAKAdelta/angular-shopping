import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'  //lo agrego aca y en el modulo raiz
})

export class ShoppingService{

    itemsShopping = [];
    products;

    constructor(private http:HttpClient) { }

    addToShopping(product){
        this.itemsShopping.push(product);
    }

    getItems(){
        return this.itemsShopping;
    }

    clearShopping(){
        this.itemsShopping = [];
        return this.itemsShopping;
    }

    //consmir api rest
    getProducts(){
        return this.http.get('https://jsonfy.com/items');
        //https://www.w3schools.com/angular/welcome.htm
    }

}