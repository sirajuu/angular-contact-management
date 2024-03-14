import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[],searchKey:string,propname:string): any[] {
    const result:any=[]
    if(! allcontacts || searchKey=='' || propname==''){
      return allcontacts
    }
    allcontacts.forEach((item:any)=>{
      if(item[propname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
