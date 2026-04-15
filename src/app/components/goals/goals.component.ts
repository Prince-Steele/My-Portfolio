import { Component } from '@angular/core';
import {
  BadgeCheck,
  BriefcaseBusiness,
  CodeXml,
  LucideIconData,
  Rocket,
  Sparkles,
  Target
} from 'lucide-angular';

interface GoalItem {
  icon: LucideIconData;
  title: string;
  desc: string;
  tag: string;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  goals: GoalItem[] = [
    {
      icon: Rocket,
      title: 'Career Direction',
      desc: 'I am progressing toward becoming a Research & Intelligent Distributed Systems Engineer, combining full-stack development with deeper backend and systems engineering.',
      tag: 'Systems Path'
    },
    {
      icon: BadgeCheck,
      title: 'Academic Pathway',
      desc: 'I plan to pursue a Bachelor’s degree in Computer Science or Computer Engineering with focus areas including AI, distributed systems, operating systems, networking, and databases.',
      tag: 'Education'
    },
    {
      icon: CodeXml,
      title: 'Professional Development',
      desc: 'My current focus is building scalable full-stack applications, strengthening backend and system design skills, and expanding into AI-integrated, data-driven systems.',
      tag: 'Current Focus'
    },
    {
      icon: Sparkles,
      title: 'AI in My Workflow',
      desc: 'I use AI tools for debugging, code optimization, rapid prototyping, and improving architecture decisions while continuing to sharpen my engineering fundamentals.',
      tag: 'AI Workflow'
    },
    {
      icon: BriefcaseBusiness,
      title: 'Opportunity Goal',
      desc: 'I’m seeking entry-level full-stack or software engineering opportunities where I can contribute to real systems, keep learning, and gain practical industry experience.',
      tag: 'Open to Roles'
    },
    {
      icon: Target,
      title: 'Long-Term Vision',
      desc: 'My long-term objective is to design advanced intelligent systems and infrastructure, then grow into a technical leader building high-impact solutions across industries.',
      tag: 'Leadership'
    }
  ];
}
