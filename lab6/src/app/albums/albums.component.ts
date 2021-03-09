import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../albums.service";
import { Album } from "../models";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: string;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = "";
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
  deleteAlbum(id: number) {
    this.albums = this.albums.filter(x => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log("Album was Deleted");
    });
  }
  addNewAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.albumsService.addAlbum(album as Album).subscribe(album => {
      this.albums.push(album);
    });
  }
}
