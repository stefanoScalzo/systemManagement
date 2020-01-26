import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-priority',
  templateUrl: './event-priority.component.html',
  styleUrls: ['./event-priority.component.scss']
})
export class EventPriorityComponent implements OnInit {

  events = [
    'Event one',
    'Event two',
    'Event three'
  ];

  prios = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit() {
  }

}
