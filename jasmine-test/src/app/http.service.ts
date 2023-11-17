import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
  updatePost(id: any, data: any) {
    return this.http.put(
      'https://jsonplaceholder.typicode.com/posts/' + id,
      data
    );
  }
}
