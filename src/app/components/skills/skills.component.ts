import { Component } from '@angular/core';
import {
  Clock3,
  LucideIconData,
  RefreshCw,
  Target,
  MessageSquare
} from 'lucide-angular';

interface SoftSkill {
  icon: LucideIconData;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  coreSkills = [
    { name: 'Angular / TypeScript', pct: 92, color: 'linear-gradient(90deg, #7c3aed, #a855f7)' },
    { name: 'Node.js / Express', pct: 87, color: 'linear-gradient(90deg, #059669, #34d399)' },
    { name: 'HTML / CSS', pct: 95, color: 'linear-gradient(90deg, #dc2626, #f97316)' },
    { name: 'MongoDB / SQL', pct: 80, color: 'linear-gradient(90deg, #0284c7, #38bdf8)' },
    { name: 'Git / DevOps', pct: 78, color: 'linear-gradient(90deg, #d97706, #fbbf24)' }
  ];

  techCategories = [
    {
      name: 'Frontend',
      color: '#a855f7',
      techs: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'SCSS']
    },
    {
      name: 'Backend',
      color: '#34d399',
      techs: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'JWT', 'Socket.io']
    },
    {
      name: 'Database',
      color: '#38bdf8',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      name: 'Tools & Cloud',
      color: '#fbbf24',
      techs: ['Git', 'Docker', 'AWS S3', 'CI/CD', 'Postman', 'Figma']
    }
  ];

  softSkills: SoftSkill[] = [
    { icon: Target, title: 'Attention to Detail', desc: 'I care deeply about quality in every line of code and pixel.' },
    { icon: MessageSquare, title: 'Communication', desc: 'Clear, concise communication with teammates and stakeholders.' },
    { icon: Clock3, title: 'Time Management', desc: 'Disciplined in meeting deadlines while maintaining code quality.' },
    { icon: RefreshCw, title: 'Adaptability', desc: 'I embrace change, new tools, and shifting requirements with ease.' }
  ];
}
