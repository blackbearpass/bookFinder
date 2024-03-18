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

  // Tools Required props
bookSearchStrings: FormGroup = new FormGroup({
  'bookTitle' : new FormControl(null),
});

  constructor (private googleBookService: GoogleBookService, private _formBuilder: FormBuilder){}
  ngOnInit(){
  }




  async findBookByTitle(){
    this.googleBookService.getBooks(this.bookSearchStrings.value.bookTitle).subscribe((value) => {
      console.log(`Result: ` + JSON.stringify(value));
    });

  }
}
