import { Component } from '@angular/core';
import { UserPostService } from '../Users/User.service'
@Component({
  moduleId: module.id,
  selector: 'Hobby',
  templateUrl: 'Hobbies.component.html',
  providers: [ UserPostService ]
})
export class HobbiesComponent  {
  posts : Post[] 
  constructor(private userPostService : UserPostService) {
    this.userPostService.getPost().subscribe(userPost => {
      console.log('ini',userPost)
      this.posts = userPost
    })
  } 
}

interface Post {
  id: number;
  title: string;
  body: string;
}
