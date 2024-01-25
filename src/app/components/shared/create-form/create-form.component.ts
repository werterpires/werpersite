import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ModalComponent, FormsModule, AlertsComponent, DialogComponent],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css',
})
export class CreateFormComponent {
  constructor(private readonly dialogService: DialogService) {}

  @Output() cancelEmitter = new EventEmitter<void>();
  @Output() confirmEmitter = new EventEmitter<void>();

  @Input() createMessages: string[] = [];

  showDialog() {
    this.dialogService.showDialog(
      'create',
      'Criar Registro',
      this.createMessages
    );
  }

  hideDialog() {
    this.dialogService.hideDialog();
  }
}
