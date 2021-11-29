import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/security/admin.guard';
import { BaseGuard } from '../core/security/base.guard';
import { Role } from '../domain/enums/role';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { ForbiddenComponent } from '../shared/http-codes/forbidden/forbidden.component';
import { NotFoundComponent } from '../shared/http-codes/not-found/not-found.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/user'},
  {
    path: 'admin/tournament',
    component: LayoutComponent,
    loadChildren: () => import('./admin/tournament/tournament.module')
      .then(m => m.TournamentModule)
    ,
    canLoad: [AdminGuard],
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
    ,
    canLoad: [BaseGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'error',
    component: LayoutComponent,
    loadChildren: () => import('../shared/http-codes/http-codes.module')
      .then(m => m.HttpCodesModule)
  },
  { path: '**', redirectTo: '/error/notfound' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    BaseGuard,
    AdminGuard
  ]
})
export class AppRoutingModule { }
