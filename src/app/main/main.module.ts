import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ComponentModule } from '../commpage/commpage.module';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  HomeComponent
];
const COMPONENTS_EXPORT = [

];

@NgModule({
imports: [
  CommonModule,
  MainRoutingModule,
  NgZorroAntdModule,
  ComponentModule
],
declarations: [
  ...COMPONENTS, ...COMPONENTS_EXPORT
],
providers:[],
exports: COMPONENTS_EXPORT
})
export class MainModule { }
