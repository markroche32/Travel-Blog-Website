import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import { Post } from '../post';

@Injectable()
export class PostsService {

    constructor(private _http: Http) { 
        
    }

    savePost(post : Post, image : File): Observable<Post> {
          
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });
        let formData = new FormData();
        formData.append('image', image, image.name);
        formData.append('post', JSON.stringify(post));

       return this._http.post("http://localhost:3000/savepost", formData, options)
       .map(res => res.json());
   }

   getPosts() : Observable<Post[]> {

    return this._http.get("http://localhost:3000/posts")
    .map(res => res.json());

   }
    
}