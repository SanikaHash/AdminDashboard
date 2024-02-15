import {Component, OnInit} from '@angular/core';
import {BookService} from "../bservice/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  string = '';
  book:any;
  constructor(private  bookservice: BookService) { }
    ngOnInit() {
    this.bookservice.getbooks().subscribe(books =>{
      this.book = books;
    })


  }

}
