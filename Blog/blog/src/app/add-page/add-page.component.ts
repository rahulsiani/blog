import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageAddService } from 'src/Service/page-add.service';
import  axios  from 'axios';



@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css'],
})
export class AddPAgeComponent implements OnInit {
  formValues: any = {};
  file: File;
  allow: any;
  pagetitle: string;
  Pagelink: string;
  metadesc: string;
  tags: string;
  category: string;
  pagetitlemarketing: string;
  seokeyword: string;
  seodec: string;
  typeValue: string;
  pagethumbnail: string;

  constructor(
    private addpageService: PageAddService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    // this.formValues.typeValue = '';
  }
  async onFilechange(event: any) {
  // let formData = new FormData()  
    const file = event.target.files[0];
    // formData.append('files',file)
    // this.addpageService.imageUpload(formData).subscribe(res =>{
    //   console.log(res)
    // })
    // try {
    //   const response = await axios.post('http://localhost:1337/upload', formData, {
    //     headers: {
    //       'Content-Type': `multipart/form-data;`,
    //     },
    //   });
    //   console.log('Image uploaded successfully:', response.data);
    // } catch (error) {
    //   console.error('Error uploading image:' );
    // }
  
    // this.formValues.pagethumbnail = file;


    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.formValues.blogImage = fileReader.result; this.formValues.img = fileReader.result;

    };
    fileReader.readAsDataURL(file);
  }


  deleteImage(e) {
    this.formValues.img = '';
    this.formValues.blogImage = undefined;
  }

  addPage() {
    let form = this.formValues 
       delete form.pagethumbnail;
       delete form.img;
    // const formData = new FormData()

    // Object.keys(form).forEach(key => {
    //   formData.append(key, form[key])
    // });

    this.addpageService.addPage({data: form}).subscribe((apiresponse) => {
      console.log(apiresponse);
      if ((apiresponse.sucess = true)) {
        this.toaster.success(
          ' successfully Signup !!',
          ' successfully Signup !!'
        );
        this.router.navigateByUrl('authentication/login');
      }
    });
    // console.log(this.allow,this.typeValue)
    // if (this.allow == "Yes"){
    //   console.log(1)
    // }
    // else{console.log(0)}
  }
}
