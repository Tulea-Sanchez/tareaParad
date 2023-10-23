import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  message: string = '';

  constructor(private router: Router) { }

  
  incrementAge(): void {
    this.age++;
    this.validateAge();
  }

  decrementAge(): void {
    if (this.age > 0) {
      this.age--;
      this.validateAge();
    }
  }

  validateAge(): void {
    if (this.age < 0) {
      this.age = 0;
      this.message = '¡Vaya, ahora eres un adivino y sabes cuándo nacerá! Edad negativa no permitida.';
    } else {
      this.message = '';
    }
  }

  validateNames(): void {
    const hasNumbersInFirstName = this.hasNumbers(this.firstName);
    const hasNumbersInLastName = this.hasNumbers(this.lastName);
    const isFirstNameTooLong = this.firstName.length > 25;
    const isLastNameTooLong = this.lastName.length > 50;

    if ((hasNumbersInFirstName || hasNumbersInLastName) && (isFirstNameTooLong || isLastNameTooLong)) {
      this.message = "¡Oh, parece que hay números y has superado la longitud máxima (25) permitida para nombre y apellidos! ¡No eres un robot, verdad?";
    } else if (hasNumbersInFirstName || hasNumbersInLastName) {
      this.message = "¡Oh, parece que hay números en nombre o apellidos! ¡No eres un robot, verdad? Pareces el modelo Noob5000";
    } else if (isFirstNameTooLong || isLastNameTooLong) {
      this.message = "¡Oh, has superado la longitud máxima permitida (25) para nombre o apellidos! ¡No eres un robot, verdad? Pareces el modelo Noob5000";
    } else {
      this.message = '';
    }
  }

  private hasNumbers(text: string): boolean {
    return /\d/.test(text);
  }

  isFirstNameValid(): boolean {
    return !!this.firstName && this.firstName.length > 0 && !this.hasNumbers(this.firstName) && this.firstName.length <= 25;
  }
  
  isLastNameValid(): boolean {
    return !!this.lastName && this.lastName.length > 0 && !this.hasNumbers(this.lastName) && this.lastName.length <= 50;
  }

  enviarDatos() {
    if (this.isFirstNameValid() && this.isLastNameValid() && this.age > 0) {
      const queryParams = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age.toString(),
      };
      this.router.navigate(['/datos'], { queryParams });
    }
    else {
      this.message = "¡Oops! Parece que olvidaste completar bien algunos campos. ¡Completa todos los campos y asegúrate de no ser un robot disfrazado como un humano! 😄";
    }    
  }
  
  
}
