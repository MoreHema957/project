import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
  topics: new FormArray([])
  });

  get topicNames(){
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic : HTMLInputElement){
   (this.topicNames).push(new FormControl(topic.value));
   topic.value = '';
  }
  removeTopic(topic : FormControl){
  let index = this.topicNames.controls.indexOf(topic);
  this.topicNames.removeAt(index);
  }


}
