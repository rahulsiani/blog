import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PageAddService } from 'src/Service/page-add.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  blog : any
  getDate(d){return new Date(d).toDateString().slice(3,15)}
  constructor(public apiblog:PageAddService,private router : Router){
    this.getApi()
  }

  getApi()
  {
    this.apiblog.getBlog().subscribe((res) =>{
      this.blog = res.data
      console.log(this.blog)

    })
  }
  description(data){
    this.router.navigate(['/blog-Description',data._id])
  }
}
