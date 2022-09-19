export class Message {
  fromEmailAddress: string;
  messageContent: string;
  timestamp: string;

  constructor(fromEmailAddress: string, messageContent: string) {
    this.fromEmailAddress = fromEmailAddress;
    this.messageContent = messageContent;
    this.timestamp = new Date().toString();
  }
}
