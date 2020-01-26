import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.scss']
})
export class EventCreatorComponent implements OnInit {

  priorities: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minutes: number[] = [0, 15, 30, 45];

  formdata: FormGroup =new FormGroup({
    eventDate: new FormControl(Validators.required),
    eventName: new FormControl("dedf", Validators.required),
    eventPriority: new FormControl(0,Validators.required),
    eventStartHour: new FormControl(0,Validators.required),
    eventStartMinute: new FormControl(0,Validators.required),
    eventEndHour: new FormControl(1,Validators.required),
    eventEndMinute: new FormControl(0,Validators.required)
  });
  constructor() { }

  ngOnInit() {

  }

}

