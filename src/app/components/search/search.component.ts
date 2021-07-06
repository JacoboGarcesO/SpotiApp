import { Component } from '@angular/core';
import { ReleasesSpotifyService } from 'src/app/services/releases-spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  public artists: any[] = [];
  public loading: boolean | undefined;

  constructor(private service: ReleasesSpotifyService) {
  }

  shareArtist(term: string) {
    this.loading = true;

    this.service.getArtists(term)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }
}
