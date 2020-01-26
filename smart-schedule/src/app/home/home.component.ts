import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date; // date from the datepicker
  day; // day in number
  month; // month in number
  monthToDate; // the starting day in the index that month will be
  dayToStartingIndex; // adding the day with the month with starting index



  userTime: TimeSlot [] = [
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},{eventname: 'COMP 354', priority: 5},
    {eventname: 'COMP 354', priority: 5}
  ];

  userCalendar = [];
  constructor() { }



  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      this.userCalendar.push(this.userTime);
      console.log(this.userTime);
      console.log(this.userCalendar);

    }
  }

  submitValue() {

  }

  mathFloor(num){
    
    return Math.floor(num);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = event.value.toDateString();
    this.getMonth(this.date.substr(4, 3));
    this.getDay(this.date.substr(8, 2));
    this.dayToIndex();
    console.log('starting'+this.dayToStartingIndex);
  }

  dayToIndex () {
    this.dayToStartingIndex = this.monthToDate + this.day;
  }

  getDay(gmtString) {
    this.day = parseInt(gmtString);
  }

  getMonth(gmtString) {
    if (gmtString.includes('Jan')) {
      this.month = 1;
      this.monthToDate = 0;
    } else if (gmtString.includes('Feb')) {
      this.month = 2;
      this.monthToDate = 31;
    } else if (gmtString.includes('Mar')) {
      this.month = 3;
      this.monthToDate = 31 + 29;
    } else if (gmtString.includes('Apr')) {
      this.month = 4;
      this.monthToDate = 31 + 29 + 31;
    } else if (gmtString.includes('May')) {
      this.month = 5;
      this.monthToDate = 31 + 29 + 31 + 30;
    } else if (gmtString.includes('Jun')) {
      this.month = 6;
      this.monthToDate = 31 + 29 + 31 + 30 + 31;
    } else if (gmtString.includes('Jul')) {
      this.month = 7;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Aug')) {
      this.month = 8;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31;
    } else if (gmtString.includes('Sep')) {
      this.month = 9;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Oct')) {
      this.month = 10;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31;
    } else if (gmtString.includes('Nov')) {
      this.month = 11;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Dec')) {
      this.month = 12;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31;
    }
  }

}
