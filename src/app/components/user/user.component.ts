import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name:string;      //name parameter as a string
  age:number;       //age parameter as number
  email:string;     //email parameter as string
  posts:Post[];
  isEdit:boolean = false;
  
  address:{         //address parameter as an object with 
    street:string,  //street as string
    city:string,    //city as string
    state:string    //state as string
  }

  address1:Address; //other way to define an object with an interface and how to populate

  hobbies: string[];  //an array of strings
  hello: any[];       //an array of any type string number

  constructor(private dataService:DataService) {
    console.log('constractor ran...');
    console.log("name in constractor is "+ this.name);
   }

  ngOnInit() {
    console.log('ngOnInit ran ....');

    this.name = 'Ezra Zav';     //populating name
    this.age = 35;              //populating age
    this.email = 'empty@nothing.com';
    this.address = {            //populating address object with    
      street:'king',            //street
      city:'boston',            //city
      state:'MA'                //state
    }

    this.hobbies = ['write code', 'eat' , 'drink']; //populating an array of strings
    this.hello = ['sleep' , 5 ,'run'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
}

  onThis(){ // a function that is called from a button click and changing the name
    console.log('Clicked the button');
    this.name='John Kong';
    this.hobbies.push('New-Hobby')
  }

  addHobby(hobby){ // a function that will add hobbies to the array
    console.log(hobby);
    this.hobbies.push(hobby); //will add it to the end of the array
    this.hobbies.unshift(hobby); //will add it to the begining of the array
    return false;
  }

  removeHobby(hobby){
    console.log(hobby);
    for(let i = 0 ;i < this.hobbies.length ; i++){
      if(this.hobbies[i]== hobby){
          this.hobbies.splice(i , 1);
      }
    }

  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{ //creating an interface object
  street: string,  //street as string
  city: string,    //city as string
  state: string    //state as string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}