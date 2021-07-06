import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
  ]
})
export class CardComponent {
  @Input() public items: any[] | undefined;
  @Input() public showArtists: boolean = false;

  constructor(private router: Router) { }
  seeArtist(item: any) {
    let artistId;

    if (item?.type === 'artist') {
      artistId = item?.id;
    } else {
      artistId = item?.artists?.[0].id;
    }
    
    this.router.navigateByUrl(`/artist/${artistId}`);
  }
}
