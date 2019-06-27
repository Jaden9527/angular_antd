import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  /** ngOnInit 是 Angular 组件生命周期中的一个钩子，Angular 中的所有钩子和调用顺序如下:
  ngOnChanges - 当数据绑定输入属性的值发生变化时调用
  ngOnInit - 在第一次 ngOnChanges 后调用
  ngDoCheck - 自定义的方法，用于检测和处理值的改变
  ngAfterContentInit - 在组件内容初始化之后调用
  ngAfterContentChecked - 组件每次检查内容时调用
  ngAfterViewInit - 组件相应的视图初始化之后调用
  ngAfterViewChecked - 组件每次检查视图时调用
  ngOnDestroy - 指令销毁前调用 **/
}
