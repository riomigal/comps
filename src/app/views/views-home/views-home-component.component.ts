import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: '# of Users',
    },
    {
      value: 900,
      label: 'Revenue',
    },
    {
      value: 2,
      label: 'Reviews',
    },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Beautiful couch to sit',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Dresser wow',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
