import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ToDoListViewComponent } from "./components/to-do-list-view/to-do-list-view.component";
import { ToDoListDetailComponent } from './components/to-do-list-detail/to-do-list-detail.component';
import { ToDoListAddComponent } from './components/to-do-list-add/to-do-list-add.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, ToDoListViewComponent, ToDoListDetailComponent, ToDoListAddComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, FontAwesomeModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
