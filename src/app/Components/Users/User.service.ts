import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserPostService {
    constructor (private http: Http) {
        console.log('run ! ')
    }

    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json())
    }
}