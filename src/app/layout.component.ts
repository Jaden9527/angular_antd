import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(
    private routerParams: ActivatedRoute
  ) { }

  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;

  ngOnInit() {
    console.log('router', this.routerParams)
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
