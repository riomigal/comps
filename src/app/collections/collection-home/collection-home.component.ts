import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Elise',
      age: 25,
      job: 'Engineer',
      employed: false,
    },
    {
      name: 'Marta',
      age: 22,
      job: 'Office Worker',
      employed: true,
    },
  ];

  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'employed',
      label: 'Has a job',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
