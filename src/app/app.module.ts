import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

// Esse módulo serve apenas para start da aplicação não devemos importar nada aqui
// usaremos o Core e o Shared Module para isso.

@NgModule({
  declarations: [],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
