import { Component } from '@angular/core';
import { Github, Heart, Linkedin, LucideIconData, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly githubIcon: LucideIconData = Github;
  readonly linkedinIcon: LucideIconData = Linkedin;
  readonly mailIcon: LucideIconData = Mail;
  readonly heartIcon: LucideIconData = Heart;

  currentYear = new Date().getFullYear();
}
