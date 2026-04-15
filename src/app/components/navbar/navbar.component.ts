import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ArrowRight, LucideIconData, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() theme: 'dark' | 'light' = 'dark';
  @Output() themeToggle = new EventEmitter<void>();

  readonly sunIcon: LucideIconData = Sun;
  readonly moonIcon: LucideIconData = Moon;
  readonly arrowRightIcon: LucideIconData = ArrowRight;

  scrolled = false;
  menuOpen = false;

  get isLightTheme(): boolean {
    return this.theme === 'light';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.themeToggle.emit();
  }
}
