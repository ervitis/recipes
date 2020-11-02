import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NewComponent } from "./forms/new/new.component";
import { ListComponent } from "./forms/list/list.component";
import { LoginComponent } from "./forms/login/login.component";

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
