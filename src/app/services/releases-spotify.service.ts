import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReleasesSpotifyService {

  constructor(private httpClient: HttpClient) { }

  getQueryUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBkUc0iBDqOXA3AHxsCZ_Wb7oAJ395FoyXY-JVPNf62x0QoDE0fqJKb9adeWAM9ONOtalTM8gsZJtscJzM'
    });

    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQueryUrl('browse/new-releases')
    .pipe(map((data: any) => data.albums.items));
  }

  getArtists(term: string) {
    return this.getQueryUrl(`search?q=${term}&type=artist`)
    .pipe(map((data: any) => data.artists.items));
  }

  getArtist(artistId: string) {
    return this.getQueryUrl(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQueryUrl(`artists/${artistId}/top-tracks?market=us`)
      .pipe(map((data: any) => data.tracks));
  }
}
