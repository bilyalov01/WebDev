import { Location } from "@angular/common";
import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlbumsService } from "../albums.service";
import { Album } from "../models";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  @Output()
  parentId: number;
  album: Album;
  loaded: boolean;
  hide: boolean;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe(album => {
        this.album = album;
        this.loaded = true;
      });
      this.parentId = id;
    });
  }

  update() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe(album => {
      console.log(album);
      this.loaded = true;
    });
  }
  back() {
    this.location.back();
  }
  showPhotos() {
    this.hide = true;
    this.router.navigate(["photos"], { relativeTo: this.route });
  }
}
