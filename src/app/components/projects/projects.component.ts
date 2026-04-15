import { Component } from '@angular/core';
import { BadgeCheck, LucideIconData, Rocket, SquareArrowRight } from 'lucide-angular';

type ProjectCategory = 'Built' | 'Upcoming';

interface Project {
  name: string;
  desc: string;
  tags: string[];
  category: ProjectCategory;
  statusIcon: LucideIconData;
  statusLabel: string;
  image: string;
  alt: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  readonly liveIcon: LucideIconData = SquareArrowRight;
  tabs: Array<'All' | ProjectCategory> = ['All', 'Built', 'Upcoming'];
  activeTab: 'All' | ProjectCategory = 'All';

  projects: Project[] = [
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
    },
    {
      name: 'OptiHome.AI',
      desc: 'An AI-powered smart home energy platform that helps households understand electricity usage, analyze bill changes, and receive personalized energy-saving recommendations.',
      tags: ['Angular', 'Node.js', 'MySQL', 'AI'],
      category: 'Upcoming',
      statusIcon: Rocket,
      statusLabel: 'Upcoming',
      image: 'assets/image/OptiHome.png',
      alt: 'OptiHome.AI upcoming project concept image'
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
