import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private showDialogSubject = new BehaviorSubject<boolean>(false);
  private dialogTitleSubject = new BehaviorSubject<string>('');
  private dialogTypeSubject = new BehaviorSubject<string>('');
  private dialogTextSubject = new BehaviorSubject<string[]>([]);

  showDialog$ = this.showDialogSubject.asObservable();
  DialogTitle$ = this.dialogTitleSubject.asObservable();
  dialogType$ = this.dialogTypeSubject.asObservable();
  dialogText$ = this.dialogTextSubject.asObservable();

  showDialog(type: string, title: string, text: string[]) {
    this.dialogTitleSubject.next(title);
    this.dialogTypeSubject.next(type);
    this.dialogTextSubject.next(text);
    this.showDialogSubject.next(true);
  }

  hideDialog() {
    this.showDialogSubject.next(false);
  }
}
