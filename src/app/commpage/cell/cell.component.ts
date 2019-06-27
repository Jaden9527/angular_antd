import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {

  constructor() { }
  // 获取组件参数
  @Input() title;
  ngOnInit() {
  }

}
