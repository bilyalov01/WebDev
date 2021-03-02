import { Component, OnInit } from "@angular/core";
import { categories } from "../categories";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  categories = categories;
  products;
  categoryIdFromRoute;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryIdFromRoute = Number(routeParams.get("categoryId"));
    this.categories = this.getLocalStorage();
    this.products = this.categories.find(
      category => category.id === this.categoryIdFromRoute
    ).products;
  }

  getLocalStorage() {
    let storage = JSON.parse(localStorage.getItem("categories"));
    return storage === null ? categories : storage;
  }

  setLocalStorage() {
    this.categories[this.categoryIdFromRoute].products = this.products;
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }
  like(index) {
    if (this.products[index].isLiked === false) {
      this.products[index].like++;
    } else {
      this.products[index].like--;
    }
    this.products[index].isLiked = !this.products[index].isLiked;
    this.setLocalStorage();
  }
}
