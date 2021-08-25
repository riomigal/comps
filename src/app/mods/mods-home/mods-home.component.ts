import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'title1',
      content: 'content1',
    },
    {
      title: 'title12',
      content: 'content12',
    },
    {
      title: 'title13',
      content: 'content13',
    },
    {
      title: 'title14',
      content: 'content14',
    },
    {
      title: 'title15',
      content: 'content15',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
