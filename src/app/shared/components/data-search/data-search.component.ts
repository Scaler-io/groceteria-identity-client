import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'groceteria-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss'],
})
export class DataSearchComponent implements OnInit {
  @Output('filter') filterEvent = new Subject();

  constructor() {}

  ngOnInit(): void {}

  public onKeyUp(event: any) {
    this.filterEvent.next(event.target.value);
  }
}
