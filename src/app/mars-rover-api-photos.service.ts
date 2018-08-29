import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotos {

  constructor(private http: Http) { }

  getByDateAndCamera(date: string){
  return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${date}&api_key=9gAhgJm26EYkPyUZygntqJ4FfdKBFABD&limit=1`)
}
}
