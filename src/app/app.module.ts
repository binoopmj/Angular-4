import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { SortPipe} from './app.sort';
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    HeaderComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MyComponentComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
