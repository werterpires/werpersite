import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import { NgIf } from '@angular/common';
import { LoaderService } from '../loader/loader.service';
import { AlertsService } from '../alerts/alerts.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-update-one-form',
  standalone: true,
  imports: [FormsModule, DialogComponent, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './update-one-form.component.html',
  styleUrl: './update-one-form.component.css',
})
export class UpdateOneFormComponent {
  @Input() updateMessages: string[] = [];
  @Input() deleteMessages: string[] = [];
  @Input() validateForm!: Function;
  @Input() updateData!: Object;
  @Input() id: number = 0;

  @Output() deleteEmitter = new EventEmitter<void>();
  @Output() editEmitter = new EventEmitter<void>();
  @Output() selectEmitter = new EventEmitter<void>();

  updateDialog = false;
  deleteDialog = false;

  constructor(
    private loaderService: LoaderService,
    private alertsService: AlertsService
  ) {}

  validateUpdateFormAndShowDialog() {
    this.loaderService.showLoader;
    if (!this.updateData || !this.validateForm) {
      this.loaderService.hideLoader;
      return;
    }
    if (this.validateForm(this.updateData)) {
      this.updateDialog = true;
    }
  }

  emmitEvent(emitter: string) {
    if (emitter === 'delete') {
      this.deleteEmitter.emit();
    } else if (emitter === 'update') {
      this.editEmitter.emit();
    }
    this.updateDialog = false;
    this.deleteDialog = false;
  }
}
