import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../entities/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted: boolean = false;
  formSubmitAttempted: boolean = false;
  formSubmitInProgress: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userMessage: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  get userEmail() {
    return this.contactForm.get('userEmail');
  }

  get userMessage() {
    return this.contactForm.get('userMessage');
  }

  onSubmit() {
    this.formSubmitAttempted = true;
    if (this.contactForm.valid) {
      this.formSubmitInProgress = true;
      this.messageService
        .saveMessage(
          new Message(this.userEmail!.value, this.userMessage!.value)
        )
        .then(() => {
          this.formSubmitted = true;
          this.formSubmitInProgress = false;

          // Disable form-controls for both input fields.
          this.userEmail!.disable();
          this.userMessage!.disable();
        });
    }
  }
}
