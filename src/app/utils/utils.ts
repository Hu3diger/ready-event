import { Injectable } from '@angular/core';

@Injectable()
export class readyUtils {
  public isNull(value){
    if(value === null){
      return true;
    } else {
      return false;
    }
  }
}
