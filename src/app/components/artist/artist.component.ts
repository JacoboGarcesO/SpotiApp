import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleasesSpotifyService } from 'src/app/services/releases-spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  public artist: any = {};
  public topTracks: any[] = [];
  public loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private service: ReleasesSpotifyService,
  ) {
    this.loading = true;
    this.router.params.subscribe(param => {
      this.getArtist(param.id);
      this.getTopTracks(param.id);
    });
  }

  private getArtist(id: string) {
    this.service.getArtist(id)
      .subscribe((data: any) => {
        this.artist = data;
      });
  }

  private getTopTracks(id: string) {
    this.service.getTopTracks(id)
      .subscribe((data: any) => {
        this.topTracks = data;
        this.loading = false;
      });
  }
}
