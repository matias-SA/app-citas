import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css'],
})
export class ListCitasComponent implements OnInit {
  @Input() listCitas: any[] = [];
  @Output() deleteCita = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  eliminarCita(index: number) {
    this.deleteCita.emit(index);
  }
}
