import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ToDoListViewComponent } from "./components/to-do-list-view/to-do-list-view.component";
import { ToDoListDetailComponent } from './components/to-do-list-detail/to-do-list-detail.component';

@NgModule({
  declarations: [AppComponent, ToDoListViewComponent, ToDoListDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
