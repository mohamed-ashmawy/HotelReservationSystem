import { Routes } from '@angular/router';
import { Home } from './components/home/component/home/home';
import { Rooms } from './components/rooms/component/rooms/rooms';
import { Gallery } from './components/gallery/component/gallery/gallery';
import { About } from './components/about/component/about/about';
import { Login } from './components/auth/login/component/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:Home},
  {path: 'rooms',component:Rooms,canActivate:[authGuard]},
  {path: 'gallery',component:Gallery},
  {path: 'about',component:About},
  {path:'login',component:Login},
];
