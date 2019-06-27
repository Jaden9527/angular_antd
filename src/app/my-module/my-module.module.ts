import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule} from 'ng-zorro-antd'; // ui框架

import { ComponentModule } from '../commpage/commpage.module'; // 公用组件

import { MyModuleComponent } from './index/my-module.component';
import { MyModuleRoutingModule } from './my-module-routing.module';
const COMPONENTS = [
  MyModuleComponent
];
const COMPONENTS_EXPORT = [
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MyModuleRoutingModule,
    ComponentModule
  ],
  providers: [

  ],
  declarations: [
    ...COMPONENTS, ...COMPONENTS_EXPORT
  ],
  entryComponents: [],
  exports: COMPONENTS_EXPORT
})
export class MyModuleModule { }

