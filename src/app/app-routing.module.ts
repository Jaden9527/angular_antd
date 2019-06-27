import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/homeIndex',
    pathMatch: 'full'
  },
  {
    path: 'MyComponentComponent/:username',
    component: HomeComponent,
    children: [ // 子组件
      { path: 'profile', component: MyComponentComponent }
    ]
  },
  { // 共有路有前缀的写法
    path: 'settings',
    children: [
      { path: 'profile', component: MyComponentComponent },
      { path: 'password', component: MyComponentComponent }
    ]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule', //  延迟加载主模块
    data: { preload: true, title: "" }
  },
  { // 路由模块懒加载功能的具体应用  使用时才去加载对应的模块
    path: 'mymodul',
    component: HomeComponent,
    loadChildren: './my-module/my-module.module#MyModuleModule',
    data: { preload: true, title: '' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
