import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TermsSignService } from './terms-sign.service';
import { ITerm, ITermSign } from './types';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertsService } from '../../shared/alerts/alerts.service';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-terms-sign',
  standalone: true,
  imports: [
    NgFor,
    NgForOf,
    ModalComponent,
    HttpClientModule,
    FormsModule,
    NgIf,
  ],
  providers: [TermsSignService],
  templateUrl: './terms-sign.component.html',
  styleUrl: './terms-sign.component.css',
})
export class TermsSignComponent implements OnInit {
  constructor(
    private readonly termsSignService: TermsSignService,
    private sanitizer: DomSanitizer,
    private alertsService: AlertsService,
    private loaderService: LoaderService
  ) {}

  @Input() roleId!: number;
  @Output() continueEmmitter = new EventEmitter<ITermSign[]>();
  @Output() cancelEmitter = new EventEmitter();

  allroleTerms: ITerm[] = [];

  ngOnInit() {
    this.getAllRoleTerms();
  }
  async getAllRoleTerms() {
    this.loaderService.showLoader();
    this.termsSignService.findAllTermsByRoleId(this.roleId).subscribe({
      next: async (res) => {
        this.allroleTerms = res;

        this.allroleTerms.forEach((term) => {
          this.signTerms.push({ termId: term.termId, accept: false });
        });

        this.loaderService.hideLoader();
      },
      error: (err) => {
        this.alertsService.showAlerts('error', 'Erro ao criar o usuário', [
          err.message,
        ]);
        this.loaderService.hideLoader();
      },
    });
  }

  signTerms: ITermSign[] = [];

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  continue(ok: boolean) {
    if (!ok) {
      this.cancelEmitter.emit();
    }
    if (ok) {
      const notSigned = this.signTerms.filter((term) => !term.accept);
      if (notSigned.length > 0) {
        return;
      }
      this.continueEmmitter.emit(this.signTerms);
    }
  }

  isContinueButtonDisabled(): boolean {
    return this.signTerms.some((term) => !term.accept);
  }
}
