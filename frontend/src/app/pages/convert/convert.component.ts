import { Component } from '@angular/core';
import {TextareaComponent} from '../../shared/components/textarea/textarea.component';
import {SelectComponent} from '../../shared/components/select/select.component';
import {converterTypes} from '../../utils/convert';

@Component({
  selector: 'app-convert',
  imports: [
    TextareaComponent,
    SelectComponent
  ],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

  converterTypes: readonly string[] = converterTypes;
  selectedConverter: string = this.converterTypes[0];

  originalValue: string = "";

  data: string[] = [];
  convertedValue: string = "";

  onSelectConverterChange(value: string) {
    this.selectedConverter = value;
  }

  onTextAreaChange(value: string) {

    this.originalValue = value;

    if (this.originalValue === this.convertedValue) {
      return;
    }

    const lastChar = value.charAt(value.length - 1);

    this.data.push(lastChar);

    this.convertedValue = this.data.join(' ');
  }

}
