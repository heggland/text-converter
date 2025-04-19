import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {


  @Input() value: string = "";
  @Output() valueChange = new EventEmitter();
  @Input() readonly!: boolean;

  onInput(event: Event) {
    if (this.readonly) {
      event.preventDefault();
      return;
    }

    const target = event.target as HTMLTextAreaElement;
    this.valueChange.emit(target.value);
    this.value = target.value;



    console.log(target.value);
  }
}
