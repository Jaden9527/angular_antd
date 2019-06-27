import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home.component';
import { ComponentModule } from '../commpage/commpage.module';

const COMPONENTS = [
    HomeComponent
];
const COMPONENTS_EXPORT = [

];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    ComponentModule
  ],
  declarations: [
    ...COMPONENTS, ...COMPONENTS_EXPORT
  ],
  providers:[],
  exports: COMPONENTS_EXPORT
})
export class HomeModule { }
