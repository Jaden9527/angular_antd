import { BrowserModule } from '@angular/platform-browser'; // BrowserModule，浏览器解析的模块
import { NgModule } from '@angular/core'; // Angular核心模块

import { AppRoutingModule } from './app-routing.module'; // 路由
import { AppComponent } from './app.component'; // 根組件
import { NgZorroAntdModule } from 'ng-zorro-antd'; // ui框架
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // http请求
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);
const COMPONENTS = [
  AppComponent,
];
const COMPONENTS_EXPORT = [

];
@NgModule({
  // 声明模块下的组件
  declarations: [
    ...COMPONENTS, ...COMPONENTS_EXPORT
  ],
  // 引入的组件\nBrowserModule,
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  // 抛出的组件
  exports: COMPONENTS_EXPORT
})
export class AppModule { }
