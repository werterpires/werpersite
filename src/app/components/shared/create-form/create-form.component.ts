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
  @Input() createMessages: string[] = [];
  @Input() title: string = '';
  @Input() validateForm!: Function;
  @Input() createData!: Object;

  @Output() cancelEmitter = new EventEmitter<void>();
  @Output() confirmEmitter = new EventEmitter<void>();

  constructor(
    private readonly dialogService: DialogService,
    private readonly alertsService: AlertsService,
    private readonly loaderService: LoaderService
  ) {}

  validateCreateFormAndShowDialog() {
    this.loaderService.showLoader;
    if (!this.createData || !this.validateForm) {
      this.loaderService.hideLoader;
      return;
    }
    if (this.validateForm(this.createData)) {
      this.dialog = true;
    }
  }

  dialog = false;
}
