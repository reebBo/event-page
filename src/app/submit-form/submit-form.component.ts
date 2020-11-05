import { Component, OnInit } from '@angular/core';
import { Member } from '../model';
import { of, Observable } from "rxjs";

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})

export class SubmitFormComponent implements OnInit {

  selectedSkills = [];
  checkedIDs = [];

  model = new Member(1, '', '', '', '', '');
  submitted = false;

  newMember() {
    this.model = new Member(1, '', '', '', '', '');
  }

  constructor() { }

  ngOnInit(): void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedSkills = this.defaultListOfSkills.filter((value, index) => {
      return value.isChecked;
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.defaultListOfSkills.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
  }


  gender = [
    { id: 1, value: "F" },
    { id: 2, value: "M" },
    { id: 3, value: "Prefer to not say" }
  ];

  defaultListOfSkills = [
    {
      id: '1',
      label: 'Leadership',
      isChecked: false
    },
    {
      id: '2',
      label: 'Flexibility',
      isChecked: false
    },
    {
      id: '3',
      label: 'Teamwork',
      isChecked: false
    },
    {
      id: '4',
      label: 'Communication skills',
      isChecked: false
    },
    {
      id: '5',
      label: 'Problem solving',
      isChecked: false
    },
    {
      id: '6',
      label: 'Details oriented',
      isChecked: false
    }
  ]


}
