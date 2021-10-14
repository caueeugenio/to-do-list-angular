import { ToDoListViewComponent } from "./components/to-do-list-view/to-do-list-view.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToDoListAddComponent } from "./components/to-do-list-add/to-do-list-add.component";
import { ToDoListDetailComponent } from "./components/to-do-list-detail/to-do-list-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ToDoListViewComponent,
  },
  {
    path: "add",
    component: ToDoListAddComponent,
  },

  {
    path: "detail/:id",
    component: ToDoListDetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
