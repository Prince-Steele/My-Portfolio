import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  BriefcaseMedical,
  ClipboardCheck,
  CodeXml,
  Download,
  Dumbbell,
  Github,
  Handshake,
  Heart,
  HeartPulse,
  Linkedin,
  LucideAngularModule,
  Mail,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Moon,
  RefreshCw,
  Rocket,
  Send,
  ShoppingBag,
  Sparkles,
  SquareArrowRight,
  Sun,
  Target,
  ShieldCheck
} from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    GoalsComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({
      ArrowRight,
      BadgeCheck,
      BriefcaseBusiness,
      BriefcaseMedical,
      ClipboardCheck,
      CodeXml,
      Download,
      Dumbbell,
      Github,
      Handshake,
      Heart,
      HeartPulse,
      Linkedin,
      Mail,
      MapPin,
      MessageSquare,
      MonitorSmartphone,
      Moon,
      RefreshCw,
      Rocket,
      Send,
      ShieldCheck,
      ShoppingBag,
      Sparkles,
      SquareArrowRight,
      Sun,
      Target
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
