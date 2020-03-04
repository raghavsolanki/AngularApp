import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uvsityScrollDirective } from './scroll.directive';
import { AboutDirective } from './about.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    uvsityScrollDirective,
    AboutDirective
  ],
  exports: [
    uvsityScrollDirective,
    AboutDirective
  ]
})
export class DirectivesModule { }