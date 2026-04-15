import { Component } from '@angular/core';
import { ArrowRight, LucideIconData, MapPin, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  readonly arrowRightIcon: LucideIconData = ArrowRight;
  readonly locationIcon: LucideIconData = MapPin;
  readonly sparklesIcon: LucideIconData = Sparkles;
}
