import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 获取路径参数

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  username: string; // 路径参数名称
  constructor(private route: ActivatedRoute) { }
  // 初始化函数
  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);
  }

}
