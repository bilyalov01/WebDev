import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlbumsService } from "../albums.service";
import { Photo } from "../models";

@Component({
  selector: "app-album-photos",
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.css"]
})
export class AlbumPhotosComponent implements OnInit {
  @Input()
  parentId: number;
  photos: Photo[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.parentId = this.route.parent.snapshot.params["id"];

    this.albumsService.getPhotos(this.parentId).subscribe(photos => {
      this.photos = photos;
    });
  }
}
