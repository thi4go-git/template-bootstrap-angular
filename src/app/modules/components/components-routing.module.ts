import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'buttons-cards', component: ComponentsComponent, title: 'Exemplo de botões e Cards' },
      { path: '', redirectTo: '/components/buttons-cards', pathMatch: 'full' },
      { path: '**', component: ComponentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
