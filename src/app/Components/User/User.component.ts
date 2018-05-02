import { Component } from '@angular/core';

@Component({
  selector: 'User',
  template: `
  <h1>add new tag : {{name}}</ h1>
  <Hobby> </Hobby>
  <hr/>
  <h3>list of language : </h3>
  <ul>
    <li *ngFor= "let tag of tags" > {{tag.name}} value: {{tag.value}}</li>
  </ul>
  <form (submit)= "addNewTag()">
  <input placeholder= "input new language " name="name" [(ngModel)]= "name"/>
  </form>
  `,
})
export class UserComponent  { 
    name: string ;
    tags: tag[];
    constructor () {
        this.name = ''
        this.tags = [{
            name: 'JS',
            value: 10
        },{
            name: 'PHP',
            value: 9
        },{
            name: 'RoR',
            value: 11
        }]
    }
    addNewTag() {
        let newTag = {
            name: this.name,
            value: Math.ceil(Math.random()*this.tags[this.tags.length-1].value)
        }
        if(this.name.length < 1 ) {
            alert('value harus ada')
        } else  {
            this.tags.push(newTag)
            this.name = ''
        }
    }
}

interface tag {
    name: string,
    value: number
}