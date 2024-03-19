import { Component } from '@angular/core';
import { GoogleBookService } from './services/google-book.service';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bring-me-some-coconuts';
  returnedData : any[] = [];
  returnedTitle: any;
  returnedSubTitle: any;
  returnedAuthor: any;
  returnedBookVolumeInfo: any;
  // Tools Required props
bookSearchStrings: FormGroup = new FormGroup({
  'bookTitle' : new FormControl(null),
  'bookAuthor' : new FormControl(null)
});

  constructor (private googleBookService: GoogleBookService, private _formBuilder: FormBuilder){}
  ngOnInit(){
  }

  reset(){
    this.bookSearchStrings.reset();
  }

  findBookByTitle(){
  

    this.googleBookService.getBooks(this.bookSearchStrings.value.bookTitle, this.bookSearchStrings.value.bookAuthor).subscribe(data => {
      this.returnedData = data.items;
      // console.log("raw data", data, "object data", this.returnedData);
      this.returnedData.forEach(element => {
        let today = new Date();
        console.log(element, "sub element");
        
        
      });
    })

  
  }
}
