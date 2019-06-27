import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // 路由模块懒加载功能的具体应用  使用时才去加载对应的模块
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule', //Lazy load main module
        data: { preload: true }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
