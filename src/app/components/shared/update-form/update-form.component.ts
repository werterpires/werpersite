import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule, DialogComponent, NgIf],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css',
})
export class UpdateFormComponent {
  @Input() updateMessages: string[] = [];

  @Output() deleteEmitter = new EventEmitter<void>();
  @Output() editEmitter = new EventEmitter<void>();
  @Output() selectEmitter = new EventEmitter<void>();

  constructor(private dialogService: DialogService) {}

  dialog = false;

  emmitEvent(emitter: string) {
    if (emitter === 'delete') {
      this.deleteEmitter.emit();
    } else if (emitter === 'update') {
      this.editEmitter.emit();
    }
  }
}
