import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class NgxElasticlunrModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxElasticlunrModule
    };
  }

}