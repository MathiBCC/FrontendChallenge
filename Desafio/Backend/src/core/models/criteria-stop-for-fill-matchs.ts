export class CriteriaStopForFillMatchs{
  startNewStep: number;
  endNewStep: number;
  startPreviousStep: number;

  constructor(start: number, end: number, startPrevious: number){
    this.startNewStep = start;
    this.endNewStep = end;
    this.startPreviousStep = startPrevious;
  }
}