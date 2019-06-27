import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
