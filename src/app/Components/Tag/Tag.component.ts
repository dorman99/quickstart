import { Component } from '@angular/core';

@Component({
  selector: 'User',
  moduleId: module.id,
  templateUrl: 'Tag.component.html',
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