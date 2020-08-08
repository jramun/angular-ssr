import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'itemType'
})
export class ItemTypePipe implements PipeTransform {

    public constructor() {
    }

    // public constructor(private itemService: ItemRecipeService) {
    // }

    public transform(type): string {
        console.log('item type pipe');
        return '';
    }

    // public transform(type: ItemType): string {
    //   return this.itemService.itemType(type);
    // }

}
