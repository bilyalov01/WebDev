import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { categories } from "../categories";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  products;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get("categoryId"));
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.products = categories.find(
      category => category.id === categoryIdFromRoute
    ).products;
    this.product = this.products.find(
      product => product.id === productIdFromRoute
    );
  }
}
