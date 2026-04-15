import { Component } from '@angular/core';
import {
  BriefcaseBusiness,
  Download,
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
  readonly locationIcon: LucideIconData = MapPin;
  readonly opportunityIcon: LucideIconData = BriefcaseBusiness;
  readonly directionIcon: LucideIconData = Rocket;
  readonly downloadIcon: LucideIconData = Download;

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
}
