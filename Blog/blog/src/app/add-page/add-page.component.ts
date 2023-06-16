import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageAddService } from 'src/Service/page-add.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css'],
})
export class AddPAgeComponent implements OnInit {
  formValues: any = {} ;
file:File;
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
  pagethumbnail : string;

  constructor(
    private addpageService: PageAddService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.formValues.typeValue = 'First';
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    const file = event.target.files[0];
    this.formValues.pagethumbnail = file;
    const fileReader = new FileReader();
    fileReader.onload = ()=> {
    
      this.formValues.img = fileReader.result;
     
    };
    fileReader.readAsDataURL(file);
  }

  addPage() {
    let form ={...this.formValues};
delete form.img;
    // m

// Object.keys(form).forEach(key => {
// formData.append(key, form[key])

// })
// formData.append'test','123')


    // this.formValues.pagetitle
    this.addpageService.addPage({ data: form }).subscribe((apiresponse) => {
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
