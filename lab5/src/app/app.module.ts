import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CategoriesComponent } from "./categories/categories.component";

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  { path: "categories/:categoryId", component: ProductItemComponent },
  {
    path: "categories/:categoryId/:products/:productId",
    component: ProductDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    TopBarComponent,
    CategoriesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
