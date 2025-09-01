import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone : false
})
export class ModalComponent  {

  @Input() isOpen: boolean = false;
  @Input() article: any;
  @Output() onClose = new EventEmitter<void>();

  async openInBrowser(url: string) {
    await Browser.open({ url });
  }

}
