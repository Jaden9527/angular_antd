import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: '',
        data: { preload: true, title: "" },
        children: [ // 子组件
          {
            path: 'admin', component: AdminComponent, data: {
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
export class AdminRoutingModule { }