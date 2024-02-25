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
  questionNumber: number = 0;
  questionAndBtnStatus: any;
  getMusic: string = ""
  showResponse:boolean = false
  questions = [
    {
      "question": "Our love story is like a captivating novel, and with each passing chapter, the plot thickens. I'm eager to see where the Next pages take us on this incredible journey.",
      "btn": "Next",
      "response":"May your love story continue to be written in the stars. Congratulations on your engagement – the beginning of a beautiful forever."
    },
    {
      "question": "Together, we've overcome challenges and celebrated triumphs. With each shared moment, I've come to realize that my happiest steps are the ones taken with you.",
      "btn": "Next",
      "response":"Cheers to the wonderful journey you've started together as a couple. Wishing you endless love, joy, and unforgettable moments."
    },
    {
      "question": "As we navigate the twists and turns of life, I'm reminded of the strength of our bond. Let's continue this journey, hand in hand, and see where the Next steps lead us.",
      "btn": "Next",
      "response":"Congratulations on officially becoming a couple! May your days be filled with love, laughter, and all the little joys that come with being in a relationship."
    },
    {
      "question": "Every day with you feels like a new adventure, and I can't help but be excited about the adventures that await us. I'm ready to take the Next step—will you join me?",
      "btn": "Next",
      "response":"As you both embark on this beautiful journey of togetherness, may your love continue to bloom and bring you immeasurable happiness. Congratulations!"
    },
    {
      "question": "Our love has weathered storms and basked in sunshine. Today, I'm standing at a crossroad, and I hope you'll choose to take the Next step in this beautiful journey with me.",
      "btn": "Next",
      "response":"Here's to the magic of love that brought you together. Congratulations on your relationship milestone – may your bond only grow stronger with time."
    },
    {
      "question": "In the grand symphony of life, our love is the most enchanting melody. I'm ready to compose the Next notes of our love story. Will you be my perfect harmony?",
      "btn": "Next",
      "response":"Celebrating the joy of being an official couple! Wishing you days filled with shared adventures, sweet surprises, and an abundance of love."
    },
    {
      "question": "The puzzle pieces of our lives fit together seamlessly. It's time to add another piece and create a picture-perfect future. Will you be the missing piece to complete my puzzle?",
      "btn": "Next",
      "response":"Congratulations on making it official! May your love story be filled with countless beautiful chapters and happy moments together."
    },
    {
      "question": "Through shared dreams and whispered hopes, we've created a world of our own. Let's continue building this world together—one step at a time",
      "btn": "Next",
      "response":"Wishing the two of you all the happiness that comes with being a couple. May your love shine brightly in every step you take together."
    },
    {
      "question": "As we stand on the precipice of the future, I can't help but feel an overwhelming sense of excitement. Let's take the plunge into the Next chapter of our lives together.",
      "btn": "Next",
      "response":"Cheers to the next chapter of your love story! May it be filled with love, understanding, and the warmth of each other's company. Congratulations!"
    },
    {
      "question": "Our love is a journey that has brought us to this moment. I want to keep walking this path with you and make it official. Will you be my partner?",
      "btn": "Yes",
      "response":"As you embrace this new chapter as a couple, may your days be filled with love that grows deeper with every passing moment. Congratulations!"
    }
  ]

  ngOnInit(): void {
    this.showResponse = false
    this.getQuestion()
    this.generateRandomMusic()
  }

  generateRandomBatch() {
    return Math.floor(Math.random() * Math.floor(Object.keys(this.questions).length))
  }

  generateRandomMusic(): void {
    this.getMusic = "../assets/music/music" + Math.floor(Math.random() * Math.floor(3)) + ".mp3"
  }

  getQuestion() {
    if (this.questionAndBtnStatus?.btn == 'Yes') {
      this.clickedYes()
    } else {
      this.questionAndBtnStatus = this.questions[this.generateRandomBatch()]
      this.questionNumber + 1
      return this.questionAndBtnStatus;
    }
  }

  clickedYes() {
    this.showResponse = true
    this.reloadPage()
  }

  reloadPage() {
    setTimeout(() => {
      location.reload();
    }, 40000);
  }
}