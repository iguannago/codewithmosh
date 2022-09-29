export default class Reminder {
  id: number;
  public isComplete: boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.isComplete = false;
  }
}
