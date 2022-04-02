import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './views/extrato/extrato.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'extrato', component: ExtratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
