import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataUrl'
})
export class DataUrlPipe implements PipeTransform {

  public transform(file: File): Promise<any> {
    return file && this.read(file);
  }

  private read(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

}
