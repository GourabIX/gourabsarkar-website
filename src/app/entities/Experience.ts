export class Experience {
  years: string;
  months: string;

  constructor(years: number, months: number) {
    this.years = years.toString();
    if (months > 0) {
      if (months === 1) this.months = ' ' + months + ' month';
      else this.months = ' ' + months + ' months';
    } else this.months = '';
  }
}
