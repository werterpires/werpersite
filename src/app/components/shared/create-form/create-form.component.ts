import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import { NgIf } from '@angular/common';
import { AlertsService } from '../alerts/alerts.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    ModalComponent,
    FormsModule,
    AlertsComponent,
    DialogComponent,
    NgIf,
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css',
})
export class CreateFormComponent {
  constructor(
    private readonly dialogService: DialogService,
    private readonly alertsService: AlertsService,
    private readonly loaderService: LoaderService
  ) {}

  @Output() cancelEmitter = new EventEmitter<void>();
  @Output() confirmEmitter = new EventEmitter<void>();

  @Input() createMessages: string[] = [];
  @Input() title: string = '';
  @Input() validateForm!: Function;
  @Input() createData!: Object;

  createFormValidateAndShowDialog() {
    this.loaderService.showLoader;
    if (!this.createData || !this.validateForm) {
      this.loaderService.hideLoader;
      return;
    }
    const errorMessages = this.validateForm(this.createData);
    if (errorMessages.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Erro ao criar assinatura',
        errorMessages
      );
      this.loaderService.hideLoader;
    } else {
      this.dialog = true;
      this.loaderService.hideLoader;
    }
  }

  dialog = false;
}
