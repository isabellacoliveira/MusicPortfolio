import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss']
})
export class TypingAnimationComponent {
  @Input() text: string = '';
  displayText: string = '';
  currentIndex: number = 0;
  isErasing: boolean = false;
  interval: number = 100;
  timer: any;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  startTyping(): void {
    this.timer = setInterval(() => {
      this.typeText();
    }, this.interval);
  }

  clearTimer(): void {
    clearInterval(this.timer);
  }

  typeText(): void {
    if (this.isErasing) {
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.slice(0, -1);
      } else {
        this.isErasing = false;
        this.currentIndex = 0;
      }
    } else {
      if (this.currentIndex < this.text.length) {
        this.displayText += this.text[this.currentIndex];
        this.currentIndex++;
      } else {
        this.isErasing = true;
      }
    }
  }
}
