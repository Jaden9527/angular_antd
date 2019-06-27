import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  constructor() { }

  ngOnInit() {
  }

}
