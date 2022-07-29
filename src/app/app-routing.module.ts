import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  
  { 
    path: '', 
    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule) 
  },

  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  
  { 
    path: 'detail-game/:_id', 
    loadChildren: () => import('./pages/detail-game/detail-game.module').then(m => m.DetailGameModule) 
  },
  
  { 
    path: 'actions-forms', 
    loadChildren: () => import('./pages/action-game/action-game.module').then(m => m.ActionGameModule),
    canActivate:[AuthenticationGuard] 
  },

  { 
    path: 'actions-edite/:_id', 
    loadChildren: () => import('./pages/action-game/action-game.module').then(m => m.ActionGameModule),
    canActivate:[AuthenticationGuard] 
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
