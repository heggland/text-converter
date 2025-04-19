import {Component} from '@angular/core';
import {TextareaComponent} from '../../shared/components/textarea/textarea.component';
import {SelectComponent} from '../../shared/components/select/select.component';
import {ConverterType, converterTypes, TextConverter} from '../../utils/convert';

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
  TransformText = new TextConverter();

  converterTypes: readonly string[] = converterTypes;
  selectedConverter: string = this.TransformText.getType();

  value: string = "";
  valueArray: string[] = [];
  convertedValue: string = "";

  onSelectConverterChange(value: string) {
    this.selectedConverter = value;
    this.TransformText.setType(value as ConverterType);
    this.convertedValue = this.TransformText.convert(this.value);
  }

  onTextAreaChange(value: string) {
    this.value = value;
    if (this.value === this.convertedValue) return;
    this.valueArray.push(value.charAt(value.length - 1));
    this.convertedValue = this.TransformText.convert(this.value);
  }

}
