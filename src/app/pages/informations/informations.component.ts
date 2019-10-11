import { Component } from '@angular/core';
import { InformationType } from './informations.enum';

@Component({
  selector: 'app-informations-page',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  infoType = InformationType;
  type = InformationType.GENERAL;
}
