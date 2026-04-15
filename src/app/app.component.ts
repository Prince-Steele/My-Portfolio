import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

type ThemeMode = 'dark' | 'light';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentTheme: ThemeMode = 'dark';

  private readonly themeStorageKey = 'portfolio-theme';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.currentTheme = this.getInitialTheme();
    this.applyTheme(this.currentTheme);
  }

  onThemeToggle(): void {
    const nextTheme: ThemeMode = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  private setTheme(theme: ThemeMode): void {
    this.currentTheme = theme;
    this.applyTheme(theme);

    try {
      window.localStorage.setItem(this.themeStorageKey, theme);
    } catch {
      // Ignore storage failures and keep the active theme in memory.
    }
  }

  private getInitialTheme(): ThemeMode {
    try {
      const savedTheme = window.localStorage.getItem(this.themeStorageKey);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch {
      // Fall back to the system preference below.
    }

    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private applyTheme(theme: ThemeMode): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }
}
