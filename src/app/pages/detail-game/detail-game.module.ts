import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailGameRoutingModule } from './detail-game-routing.module';
import { DetailGameComponent } from './detail-game.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailGameComponent
  ],
  imports: [
    CommonModule,
    DetailGameRoutingModule,
    MatButtonModule,
    SharedModule,
    RouterModule
  ]
})
export class DetailGameModule { }
