import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionGameComponent } from './action-game.component';

const routes: Routes = [{ path: '', component: ActionGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionGameRoutingModule { }
