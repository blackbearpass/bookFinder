import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {
  googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  
  titleQueryString = 'intitle:';
  authorQueryString = 'inauthor:';
  publisherQueryString = 'inpublisher:';
  subjectQueryString = 'subject:';

  constructor(private http: HttpClient) { }

  public  getBooks(title?: any, author?: any, publisher?: any, subject?: any){
    return this.http.get<any>(`${this.googleBooksApiUrl}${this.titleQueryString}${title}`)
  }
}
