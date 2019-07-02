import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

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


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {

  }

  ngOnInit(): void {
    this.routerChange();
  }

  /** 监听路由变化 */
  routerChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),  // 筛选原始的Observable：this.router.events
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe((event) => {
        /** 根据路由动态修改页面标题 */
        if (event["title"]) {
          this.titleService.setTitle(event["title"])
        }
      });
  }
}
