import { Directive, ElementRef, Renderer2, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'passwordToggle'
})
export class TogglePasswordDirective {
  private isPasswordVisible: boolean = false;

  @Output() visibilityChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.togglePasswordVisibility();
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const inputElement = this.el.nativeElement.previousElementSibling as HTMLInputElement;

    if (this.isPasswordVisible) {
      this.renderer.setAttribute(inputElement, 'type', 'text');
    } else {
      this.renderer.setAttribute(inputElement, 'type', 'password');
    }

    this.visibilityChanged.emit(this.isPasswordVisible);
  }

  get visibilityState(): boolean {
    return this.isPasswordVisible;
  }
}
