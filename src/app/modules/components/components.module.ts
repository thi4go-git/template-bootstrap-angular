import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ], exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
