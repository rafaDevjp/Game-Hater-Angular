import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailGameComponent } from './detail-game.component';

const routes: Routes = [{ path: '', component: DetailGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailGameRoutingModule { }
