import { Component } from '@angular/core';
import { ReleasesSpotifyService } from 'src/app/services/releases-spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  public releases: any[] = [];
  public loading: boolean;
  public error: boolean = false;
  public messageError: string = '';

  constructor(private service: ReleasesSpotifyService) { 
    this.loading = true;

    this.service.getNewReleases()
      .subscribe((data: any) => {
        this.releases = data;
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
        this.error = true;
        this.messageError = err.error.error.message;
      });
  }

}
