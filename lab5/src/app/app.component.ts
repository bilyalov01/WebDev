import { Component } from "@angular/core";
import { categories } from "./categories";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  categories = this.getLocalStorage();
  title = "Angular app toDo application";
  getLocalStorage() {
    let storage = JSON.parse(localStorage.getItem("categories"));
    return storage === null ? categories : storage;
  }
}
