import { Component, ElementRef, HostListener } from '@angular/core';
import {
  BriefcaseBusiness,
  ChevronDown,
  Download,
  FileText,
  FileType,
  LucideIconData,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles
} from 'lucide-angular';

interface HighlightItem {
  icon: LucideIconData;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  resumePickerOpen = false;

  readonly locationIcon: LucideIconData = MapPin;
  readonly opportunityIcon: LucideIconData = BriefcaseBusiness;
  readonly directionIcon: LucideIconData = Rocket;
  readonly downloadIcon: LucideIconData = Download;
  readonly chevronDownIcon: LucideIconData = ChevronDown;
  readonly pdfIcon: LucideIconData = FileText;
  readonly docxIcon: LucideIconData = FileType;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  highlights: HighlightItem[] = [
    {
      icon: ShieldCheck,
      title: 'Production-Style Systems',
      desc: 'Built full-stack applications with secure authentication, role-based access, messaging, and scheduling workflows.'
    },
    {
      icon: Sparkles,
      title: 'AI in My Workflow',
      desc: 'Use AI-assisted tools for debugging, problem-solving, rapid prototyping, and improving system design decisions.'
    },
    {
      icon: Rocket,
      title: 'Research-Driven Growth',
      desc: 'Progressing toward AI, distributed systems, and deeper backend engineering through practical project work and study.'
    }
  ];

  toggleResumePicker(): void {
    this.resumePickerOpen = !this.resumePickerOpen;
  }

  closeResumePicker(): void {
    this.resumePickerOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.resumePickerOpen) {
      return;
    }

    const target = event.target as Node | null;

    if (target && !this.elementRef.nativeElement.contains(target)) {
      this.resumePickerOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.resumePickerOpen = false;
  }
}
