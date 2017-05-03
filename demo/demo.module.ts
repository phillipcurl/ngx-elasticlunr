import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElasticlunrModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxElasticlunrModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}