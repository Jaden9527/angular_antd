import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyModuleComponent } from './index/my-module.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', component: MyModuleComponent, data: {
                    title: '钉单'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyModuleRoutingModule { }
