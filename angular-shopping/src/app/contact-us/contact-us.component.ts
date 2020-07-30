import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit{

    modelForm;  //almacenara el modelo de mi formulario

    constructor(private formBuilder: FormBuilder){
        //seteando el modelo del formulario
        this.modelForm = this.formBuilder.group({
            nombre: '',
            apellido: '',
            correo: '',
            mensaje: ''
        })
    }

    ngOnInit(){

    }

    onSubmit(){
        this.modelForm.reset();  //Vaciamos los controles
        alert("Gracias por enviarnos tus dudas, te responderemos en la brevedad posible" +
        "Att: Are de Desarrollo");
    }
}