import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { EventPriorityComponent } from './event-priority/event-priority.component';
import {userTime} from './userTime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resultToHome;
  date; // date from the datepicker
  day; // day in number
  month; // month in number
  monthToString; // month in number
  monthToDate; // the starting day in the index that month will be
  dayToStartingIndex; // adding the day with the month with starting index
  boolArray = [false, false, false, false, false, false, false];

  timePerDay: userTime = {
    timeSlot : [],
    available : 96
  };


  userCalendar = [];
  constructor(public dialog: MatDialog) { }



  ngOnInit() {
    const tempDay: TimeSlot = {
      available: true,
    };
    for (let i = 0; i < 8; i++) {
      this.userCalendar.push(this.timePerDay);
    }
    for (let j = 0; j < 96 ; j++) {

      this.timePerDay.timeSlot.push(tempDay);
      // this.timePerDay.available = this.timePerDay.available - 1;
    }
  }

  dayShown(index) {
    this.boolArray[index] = !this.boolArray[index];
    return this.boolArray[index];
  }

  submitValue() {

  }

  mathFloor(num) {

    return Math.floor(num);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = event.value.toDateString();
    this.getMonth(this.date.substr(4, 3));
    this.getDay(this.date.substr(8, 2));
    this.dayToIndex();
    console.log('starting' + this.dayToStartingIndex);
  }

  dayToIndex() {
    this.dayToStartingIndex = this.monthToDate + this.day;
  }

  getDay(gmtString) {
    this.day = parseInt(gmtString);
  }


  openPriorityDialog() { // where priorities will be set
    const dialogRef = this.dialog.open(EventPriorityComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getMonth(gmtString) {
    if (gmtString.includes('Jan')) {
      this.monthToString = gmtString;
      this.month = 1;
      this.monthToDate = 0;
    } else if (gmtString.includes('Feb')) {
      this.monthToString = gmtString;
      this.month = 2;
      this.monthToDate = 31;
    } else if (gmtString.includes('Mar')) {
      this.monthToString = gmtString;
      this.month = 3;
      this.monthToDate = 31 + 29;
    } else if (gmtString.includes('Apr')) {
      this.monthToString = gmtString;
      this.month = 4;
      this.monthToDate = 31 + 29 + 31;
    } else if (gmtString.includes('May')) {
      this.monthToString = gmtString;
      this.month = 5;
      this.monthToDate = 31 + 29 + 31 + 30;
    } else if (gmtString.includes('Jun')) {
      this.monthToString = gmtString;
      this.month = 6;
      this.monthToDate = 31 + 29 + 31 + 30 + 31;
    } else if (gmtString.includes('Jul')) {
      this.monthToString = gmtString;
      this.month = 7;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Aug')) {
      this.monthToString = gmtString;
      this.month = 8;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31;
    } else if (gmtString.includes('Sep')) {
      this.monthToString = gmtString;
      this.month = 9;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Oct')) {
      this.monthToString = gmtString;
      this.month = 10;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31;
    } else if (gmtString.includes('Nov')) {
      this.monthToString = gmtString;
      this.month = 11;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30;
    } else if (gmtString.includes('Dec')) {
      this.monthToString = gmtString;
      this.month = 12;
      this.monthToDate = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31;
    }
  }

  add(object) {
    let lengthOfObj = this.length(object.get('eventStartHour').value, object.get('eventStartMinute').value, object.get('eventEndHour').value, object.get('eventEndMinute').value);
    console.log('lengthOfObj'+lengthOfObj);
    console.log('available'+this.userCalendar[this.monthToDate + this.day - 1].available);
    if (this.userCalendar[this.monthToDate + this.day - 1].available >= lengthOfObj) {
      console.log('enter me2');

      if (this.consecutiveAvailibility(lengthOfObj) != 100 &&
      this.userCalendar[this.monthToDate + this.day - 1].timeSlot[this.startTimeSlot(object.get('eventStartHour').value, object.get('eventStartMinute').value )].available

      ) { // if stuck togeather availibility
        console.log('enter me');
        const tryme = this.consecutiveAvailibility(lengthOfObj);
        this.userCalendar[this.monthToDate + this.day - 1].available = this.userCalendar[this.monthToDate + this.day - 1].available-lengthOfObj;

        for (let j = this.startTimeSlot(object.get('eventStartHour').value,
        object.get('eventStartMinute').value); j < lengthOfObj; j++) {
          this.userCalendar[this.monthToDate + this.day-1].timeSlot[j] = {
            eventname: object.get('eventName').value,
            priority: object.get('eventPriority').value,
            startingLength: lengthOfObj,
            available: false
          };
        }
      } else { // if not stuck togeather availibility
        console.log('nooooo');
        const collisions  = this.numberOfCollisions(this.startTimeSlot(object.get('eventStartHour').value, object.get('eventStartMinute').value ), object);
        this.makeSpace(this.userCalendar[this.monthToDate + this.day - 1].timeSlot, collisions);
        // for (let j = 0; j < lengthOfObj; j++) {
        //   this.userCalendar[this.monthToDate + this.day].timeSlot
        //   .splice(

        //     this.startTimeSlot(
        //       object.get('eventStartHour').value,
        //       object.get('eventStartMinute').value), 1,
        //   {
        //     eventname: object.get('eventName').value,
        //     priority: object.get('eventPriority').value,
        //     startingLength: lengthOfObj,
        //     available: false
        //   });
        // }
      }
      console.log(this.userCalendar);

   //   this.userCalendar[this.monthToDate+this.day].userTime.timeSlot[1]; //asusming the day is the same as shown on the home
    }
  }

  consecutiveAvailibility(neededTime) {
    const presetNeededTime = neededTime;
    for (let i = 0; i < this.userCalendar[this.monthToDate + this.day - 1].timeSlot.length; i++) {
      if (this.userCalendar[this.monthToDate + this.day - 1].timeSlot[i].available == true) {
        neededTime --;
        if (neededTime == 0) {
          return i - presetNeededTime + 1;
        }
      } else if (this.userCalendar[this.monthToDate + this.day - 1].timeSlot[i].available == false) {
        neededTime = presetNeededTime;
      }
    }
    return 100;
  }

  numberOfCollisions(desiredStartTime, actualObjectToBeInserted: TimeSlot) {
    let collisions = 0;
    for (let i = desiredStartTime; i < actualObjectToBeInserted.startingLength; i++) {
      if (this.userCalendar[this.monthToDate + this.day - 1].timeSlot[i].available == false) {
        collisions++;
      }
    }
    return collisions;
  }

  makeSpace(array, needed) {
    console.log('reaching mat');
    for (let i = 0; i < Array.length; i++) {
      if (needed = 0) {
        return array;
      }
      if (array[i] == null) { // ts.available==true
        array = this.shift(array, i);
        this.makeSpace(array, needed - 1);
      }
    }
  }

    shift(array,  i) {
      for (let j = i; j < Array.length; j++) {
       array[j] = array[j + 1];
      }
      return Array;
    }

  length(startHour, startMin, endHour, endMin) {
    return (((endHour * 4) + (endMin / 15)) - ((startHour * 4) + (startMin / 15)));
  }

  startTimeSlot(startHour, startMin) {
    return (startHour * 4) + (startMin / 15);
  }

  openEventCreatorDialog() {
    const dialogRef = this.dialog.open(EventCreatorComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.add(result);
      }
    });
  }
}
