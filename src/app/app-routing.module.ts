import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Whoweare1Component } from './whoweare1/whoweare1.component';
import { Whoweare2Component } from './whoweare2/whoweare2.component';

const routes: Routes = [
  { path: 'whoweare1', component: Whoweare1Component },
  { path: 'whoweare2', component: Whoweare2Component }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ CommonModule, RouterModule ]
})
export class AppRoutingModule { }
