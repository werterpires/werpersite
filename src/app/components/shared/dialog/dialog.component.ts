import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ModalComponent, NgStyle, NgIf, NgFor],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Output() cancelEmitter = new EventEmitter();
  @Output() confirmEmitter = new EventEmitter();

  title: string = '';
  text: string[] = [];
  dialogType: string = '';
  showDialog = false;

  dialogTypes: {
    [key: string]: {
      color: string;
      icon: string;
      cancel: boolean;
      confirm: boolean;
    };
  } = {
    delete: {
      color: '#ff0000',
      icon: 'error_outline',
      cancel: false,
      confirm: false,
    },
    create: {
      color: '#00ff00',
      icon: 'check_circle_outline',
      cancel: true,
      confirm: true,
    },
    update: {
      color: '#ffff00',
      icon: 'warning_outline',
      cancel: true,
      confirm: true,
    },
  };

  constructor(private dialogService: DialogService) {
    this.dialogService.showDialog$.subscribe((showAlerts) => {
      this.showDialog = showAlerts;
    });
    this.dialogService.dialogType$.subscribe((alertType) => {
      this.dialogType = alertType;
    });
    this.dialogService.dialogText$.subscribe((alertText) => {
      this.text = alertText;
    });
    this.dialogService.DialogTitle$.subscribe((alertTitle) => {
      this.title = alertTitle;
    });
  }

  hideAlerts() {
    this.dialogService.hideDialog();
  }
}
