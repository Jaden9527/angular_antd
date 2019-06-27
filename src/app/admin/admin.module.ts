import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ComponentModule } from '../commpage/commpage.module';
import { AdminRoutingModule } from './admin-routing.module';

const COMPONENTS = [
  AdminComponent
];
const COMPONENTS_EXPORT = [

];

@NgModule({
imports: [
  CommonModule,
  AdminRoutingModule,
  NgZorroAntdModule,
  ComponentModule
],
declarations: [
  ...COMPONENTS, ...COMPONENTS_EXPORT
],
providers:[],
exports: COMPONENTS_EXPORT
})
export class AdminModule { }
