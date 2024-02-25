import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 title = 'hello-mahal';
 questionNumber:number = 0;
 questionAndBtnStatus:any;
 getMusic:string = ""
 questions = [
  {
    "question": "Our love story is like a captivating novel, and with each passing chapter, the plot thickens. I'm eager to see where the Next pages take us on this incredible journey.",
    "btn": "Next"
  },
  {
    "question": "Together, we've overcome challenges and celebrated triumphs. With each shared moment, I've come to realize that my happiest steps are the ones taken with you.",
    "btn": "Next"
  },
  {
    "question": "As we navigate the twists and turns of life, I'm reminded of the strength of our bond. Let's continue this journey, hand in hand, and see where the Next steps lead us.",
    "btn": "Next"
  },
  {
    "question": "Every day with you feels like a new adventure, and I can't help but be excited about the adventures that await us. I'm ready to take the Next step—will you join me?",
    "btn": "Next"
  },
  {
    "question": "Our love has weathered storms and basked in sunshine. Today, I'm standing at a crossroad, and I hope you'll choose to take the Next step in this beautiful journey with me.",
    "btn": "Next"
  },
  {
    "question": "In the grand symphony of life, our love is the most enchanting melody. I'm ready to compose the Next notes of our love story. Will you be my perfect harmony?",
    "btn": "Next"
  },
  {
    "question": "The puzzle pieces of our lives fit together seamlessly. It's time to add another piece and create a picture-perfect future. Will you be the missing piece to complete my puzzle?",
    "btn": "Next"
  },
  {
    "question": "Through shared dreams and whispered hopes, we've created a world of our own. Let's continue building this world together—one step at a time",
    "btn": "Next"
  },
  {
    "question": "As we stand on the precipice of the future, I can't help but feel an overwhelming sense of excitement. Let's take the plunge into the Next chapter of our lives together.",
    "btn": "Next"
  },
  {
    "question": "Our love is a journey that has brought us to this moment. I want to keep walking this path with you and make it official. Will you marry me and be my forever companion?",
    "btn": "Yes"
  }
]

 ngOnInit(): void {
  this.getQuestion()
  this.generateRandomMusic()
 }

  generateRandomBatch() {
    return Math.floor(Math.random() * Math.floor(Object.keys(this.questions).length))
  }

  generateRandomMusic():void {
    this.getMusic = "../assets/music/music" + Math.floor(Math.random() * Math.floor(3)) + ".mp3"
  }

  getQuestion() {
    if(this.questionAndBtnStatus?.btn == 'Yes') {
      this.clickedYes()
    } else {
      this.questionAndBtnStatus = this.questions[this.generateRandomBatch()]
      this.questionNumber + 1
      return this.questionAndBtnStatus;
    }
  }

  clickedYes() {
    alert("May your love story continue to be written in the stars. Congratulations on your engagement – the beginning of a beautiful forever.")
  }
}