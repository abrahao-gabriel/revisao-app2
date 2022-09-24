import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() pv: string;
  @Input() n: string;
  @Input() i: string;
  constructor() {}

  ngOnInit() {}

  getPrestacao() {
    let pv = Number(this.pv);
    let i = Number(this.i) / 100;
    let n = Number(this.n);

    let p = (pv * (Math.pow(1 + i, n) * i)) / (Math.pow(1 + i, n) - 1);
    return p;
  }

  getMes() {
    var meses = [];
    for (var i = 1; i <= Number(this.n); i++) {
      meses.push(i);
    }
    return meses;
  }
  getJuros(n: Number) {
    var value = Number(this.pv);
    for (var i = 0; i < n; i++) {
      value = value + value * Number(this.i) - this.getPrestacao();
    }
    return value * Number(this.i);
  }
}
