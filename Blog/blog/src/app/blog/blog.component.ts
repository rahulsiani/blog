import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageAddService } from 'src/Service/page-add.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  getdata : any
  blogdec : any
  blogimg : any
  authorimg : any
  firstName : any
  title : any
  blogdepartment : any
  getDate(d){return new Date(d).toDateString().slice(3,15)}
  createdate : any

  constructor(private router : ActivatedRoute, private api :PageAddService ){
    this.api.getBlogdes(this.router.snapshot.params['id']).subscribe(res => {
      this.getdata=res.data
      this.blogdec = this.getdata.text
      this.blogimg = this.getdata.image
      this.authorimg = this.getdata.author.image
      this.firstName = this.getdata.author.first_name
      this.title = this.getdata.title
      this.blogdepartment = this.getdata.author.department
      this.createdate = this.getdata.updatedAt

      console.log(this.getdata)
      //console.log(this.title)


    })    
  }
}
