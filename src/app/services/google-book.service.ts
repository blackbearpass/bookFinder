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

  public getBooks(title?: any, author?: any, publisher?: any, subject?: any){
    if(author != null && title != null){
      return this.http.get<any>(`${this.googleBooksApiUrl}${this.authorQueryString}${title}&${this.authorQueryString}${author}`)
    }
    else if (title != null ){
    return this.http.get<any>(`${this.googleBooksApiUrl}${this.titleQueryString}${title}`)
    }
    else if(author != null ){
      return this.http.get<any>(`${this.googleBooksApiUrl}${this.authorQueryString}${author}`)
    }

    else {
      return this.http.get<any>(`${this.googleBooksApiUrl}${this.titleQueryString}${title}`)
    }
  }
}
