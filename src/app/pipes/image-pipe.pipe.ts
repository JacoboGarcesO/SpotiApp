import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/no-image.png';
    } else if (images.length > 0) {
      return images[0].url
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
