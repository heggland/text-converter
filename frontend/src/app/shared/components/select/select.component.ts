import {Component, Input} from '@angular/core';
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

  onSelectChange(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
  }

}
