import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [
    NgForOf
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  @Input() options: readonly string[] = [];
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter();

  onSelectChange(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(this.value);
  }

}
