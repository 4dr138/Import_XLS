import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrudGroupsComponent} from "./crud-groups/crud-groups.component";
import {SingleBandComponent} from "./single-band/single-band.component";

const routes: Routes = [
  {path: '', component: CrudGroupsComponent},
  {path: 'band/:id', component: SingleBandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
