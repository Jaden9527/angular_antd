import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        data: { preload: true, title: "" },
        children: [ // 子组件
          {
            path: 'home', component: HomeComponent, data: {
                title: '主页'
            }
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }