import { Component } from '@angular/core';
import { BadgeCheck, LucideIconData, SquareArrowRight } from 'lucide-angular';

type ProjectCategory = 'Built';

interface Project {
  name: string;
  desc: string;
  tags: string[];
  category: ProjectCategory;
  statusIcon: LucideIconData;
  statusLabel: string;
  image: string;
  alt: string;
  imageFit?: 'contain';
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  readonly liveIcon: LucideIconData = SquareArrowRight;
  tabs: Array<'All' | ProjectCategory> = ['All', 'Built'];
  activeTab: 'All' | ProjectCategory = 'All';

  projects: Project[] = [
    {
      name: 'PaveWay',
      desc: 'A civic platform that empowers Jamaican citizens to report potholes, flooding, and other road issues, track repair progress, and improve communities across all 14 parishes.',
      tags: ['React', 'Supabase', 'PWA', 'Civic Tech'],
      category: 'Built',
      statusIcon: BadgeCheck,
      statusLabel: 'Built',
      image: 'assets/image/paveway.png',
      alt: 'PaveWay logo featuring a road inside a map pin',
      imageFit: 'contain',
      liveUrl: 'https://paveway-rust.vercel.app/'
    },
    {
      name: 'CareWise Health Platform',
      desc: 'Your digital healthcare platform built to support secure access, communication, and appointment workflows in one experience.',
      tags: ['Angular', 'Node.js', 'Express', 'Healthcare'],
      category: 'Built',
      statusIcon: BadgeCheck,
      statusLabel: 'Built',
      image: 'assets/image/carewiseproject.png',
      alt: 'CareWise healthcare platform project screenshot',
      liveUrl: 'https://carewise-ivory.vercel.app/'
    },
    {
      name: 'CropWise',
      desc: 'AI-powered farming assistant that helps farmers with crop recommendations, yield predictions, and weather insights.',
      tags: ['Angular', 'Node.js', 'SQL', 'AgriTech'],
      category: 'Built',
      statusIcon: BadgeCheck,
      statusLabel: 'Built',
      image: 'assets/image/Cropwiseproject.png',
      alt: 'CropWise agriculture platform project screenshot',
      liveUrl: 'https://cropwise-ai-six.vercel.app/'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeTab === 'All') {
      return this.projects;
    }

    return this.projects.filter(project => project.category === this.activeTab);
  }

  setTab(tab: 'All' | ProjectCategory): void {
    this.activeTab = tab;
  }
}
