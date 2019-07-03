import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'; // ui框架
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
// 公用组件
import { CellComponent } from './cell/cell.component';
import { UploadComponent } from './upload/upload.component';
const COMPONENTS = [

];
const COMPONENTS_EXPORT = [
  CellComponent,
  UploadComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  providers: [],
  declarations: [
    ...COMPONENTS, ...COMPONENTS_EXPORT
  ],
  exports: COMPONENTS_EXPORT
})
export class ComponentModule { }
