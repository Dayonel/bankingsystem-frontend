import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(body: string): void {
    this.toasts.push({ body });
  }
}
