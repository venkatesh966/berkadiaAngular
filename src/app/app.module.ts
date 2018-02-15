import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './get/filter.pipe';
import { GuardService } from './get/guard.service';
const route:Routes=[
  { path:'add',component:AddComponent},
  { path:'get', component:GetComponent},
  { path:'delete',component:DeleteComponent},
  { path:'update/:id', component:UpdateComponent},
  { path:'details/:id',canActivate:[GuardService],component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    GetComponent,
    DeleteComponent,
    UpdateComponent,
    DetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),FormsModule,HttpModule,CommonModule
  ],
  providers: [MovieService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
