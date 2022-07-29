import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameComponent } from './components/card-game/card-game.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { RouterModule } from '@angular/router';
import { LoandingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FilterGamesPipe } from './pipes/filter-games.pipe';




@NgModule({
  declarations: [
    CardGameComponent,
    CarrouselComponent,
    LoandingComponent,
    FilterGamesPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SlickCarouselModule
  ],
  exports:[CardGameComponent, LoandingComponent, CarrouselComponent, FilterGamesPipe]
})
export class SharedModule { }
