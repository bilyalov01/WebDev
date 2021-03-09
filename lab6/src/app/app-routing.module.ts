import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
import { AlbumsComponent } from "./albums/albums.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumsComponent },
  {
    path: "albums/:id",
    component: AlbumDetailsComponent,
    children: [{ path: "photos", component: AlbumPhotosComponent }]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
