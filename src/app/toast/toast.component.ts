import { Component } from '@angular/core';
import { ToastService } from './toast-service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toasts: any[];

  constructor(toastService: ToastService) {
    this.toasts = toastService.toasts;
  }
}
