import { Component } from '@angular/core';
import { BadgeCheck, Github, LucideIconData, Mail, Send } from 'lucide-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly contactApiUrl = environment.contactApiUrl;
  readonly githubIcon: LucideIconData = Github;
  readonly mailIcon: LucideIconData = Mail;
  readonly sendIcon: LucideIconData = Send;
  readonly sentIcon: LucideIconData = BadgeCheck;

  sent = false;
  sending = false;
  errorMessage = '';

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (this.sending) {
      return;
    }

    this.errorMessage = '';
    this.sent = false;

    const payload = {
      name: this.form.name.trim(),
      email: this.form.email.trim(),
      subject: this.form.subject.trim(),
      message: this.form.message.trim()
    };

    if (!payload.name || !payload.email || !payload.message) {
      this.errorMessage = 'Please fill in your name, email, and message.';
      return;
    }

    this.sending = true;

    try {
      const response = await fetch(this.contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        this.errorMessage = result?.message ?? 'Unable to send your message right now.';
        return;
      }

      this.sent = true;
      this.form = { name: '', email: '', subject: '', message: '' };

      setTimeout(() => {
        this.sent = false;
      }, 3500);
    } catch {
      this.errorMessage = 'Unable to reach the contact service right now.';
    } finally {
      this.sending = false;
    }
  }
}
