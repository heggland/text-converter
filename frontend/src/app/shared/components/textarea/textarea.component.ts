import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ]
})
export class TextareaComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() readonly!: boolean;

  @Input() disableResize: boolean = false;
  @Input() allowCopy = false;
  copied = false;

  onInput(event: Event) {
    if (this.readonly) {
      event.preventDefault();
      return;
    }
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  @HostListener('click')
  async onClick() {
    if (this.allowCopy) {
      await navigator.clipboard.writeText(this.value);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    }
  }
}
