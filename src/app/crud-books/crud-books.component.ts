import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-books',
  templateUrl: './crud-books.component.html',
  styleUrls: ['./crud-books.component.css']
})
export class CrudBooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectData();  
  }

books= [];
id;

manageData(name,author,publish){
    var bookDetails = {
        bookname: "",
        authorname: "",
        publishdate: ""
    };

    bookDetails.bookname= name.value;
    bookDetails.authorname= author.value;
    bookDetails.publishdate= publish.value;


    if(this.id==null){
       this.books.push(bookDetails);
    }
    else{
        this.books[this.id] = bookDetails;
        this.id = null;
    }
    console.log(this.books);
    this.setData(this.books);

    name.value=""; 
    author.value="";
    publish.value="";
}

selectData(){
    this.books=this.getData();
}

editData(index,name,author,publish){
    this.id = index;
    let arrObj =this.getData();
	name.value = arrObj[index].bookname;
	author.value = arrObj[index].authorname;
	publish.value = arrObj[index].publishdate;
    this.setData(arrObj);
}

deleteData(index){
    this.books=this.getData();
	this.books.splice(index,1);
    this.setData(this.books);
	this.selectData();
}

getData(){
	let arr=JSON.parse(localStorage.getItem('booksArray') || "[]");
	return arr;
}

setData(arr){
	localStorage.setItem('booksArray',JSON.stringify(arr));
}

}