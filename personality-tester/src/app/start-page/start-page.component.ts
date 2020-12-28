import { Component, OnInit } from '@angular/core';
import { PrimaryserviceService } from '../service/primaryservice.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  private quiz;
  private questionsAndAnswers = [];
  constructor(private primaryService: PrimaryserviceService) {

    this.quiz = this.primaryService.resolveItems();
    this.initiateQuiz();
  }
  ngOnInit() {

  }
  initiateQuiz() {
    let value = [];
    console.log(value)
    let question = '';
    let correctAns = '';
    let incorrectAns = [];
    let bundle = {}
    let ansList = [];
    this.quiz.value.results.forEach(element => {
      question = element.question
      correctAns = element.correct_answer
      incorrectAns = element.incorrect_answers
      ansList = element.incorrect_answers;
      ansList.push(correctAns)
      bundle = { 'question': question, 'ansList': ansList, 'correctAnswer': correctAns, 'incorrect_answers': incorrectAns }
      console.log(bundle)
      this.questionsAndAnswers.push(bundle)
    });
    console.log(this.questionsAndAnswers);
  }
}
