import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPAgeComponent } from './add-page/add-page.component';
import { CardComponent } from './card/card.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {'path':'addpage', 'component':AddPAgeComponent},
  {'path':'card', 'component':CardComponent},
  {'path':'blog-Description/:id', 'component':BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
