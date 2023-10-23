import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Person } from '../entities/person';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  userData!: { firstName: string; lastName: string; age: number };
  persons: Person[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.userData = {
        firstName: params['firstName'], 
        lastName: params['lastName'], 
        age: Number(params['age']), 
      };


      const person = new Person(this.userData.firstName, this.userData.lastName, this.userData.age);
      this.persons.push(person);
    });
  }

  retrocederATarea(): void {
    this.router.navigate(['/tarea']); 
  }

}
