import {Component, OnInit} from '@angular/core';
import {NewInterface} from '../../interfaces/NewInterface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public data: Array<NewInterface> = [
    {nombre: 'Carlos', apellido: 'Hernandez', email: 'mail@mail.com', edad: 21},
    {nombre: 'Eduardo', apellido: 'Meraz', email: 'mail1@mail.com', edad: 24},
    {nombre: 'Fernando', apellido: 'Diaz', email: 'mail2@mail.com', edad: 26},
    {nombre: 'Karla', apellido: 'Chavez', email: 'mail3@mail.com', edad: 28},
    {nombre: 'Cecilia', apellido: 'Nava', email: 'mail4@mail.com', edad: 20},
    {nombre: 'Paola', apellido: 'Cordova', email: 'mail5@mail.com', edad: 60},
    {nombre: 'Pablo', apellido: 'Escovar', email: 'mail6@mail.com', edad: 30}
  ];

  constructor() {
  }

  selectedPerson: NewInterface;

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

}
