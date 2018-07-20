import {Component, OnInit} from '@angular/core';
import {Test} from '../test';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponent implements OnInit {
  test: Test = {
    id: 1,
    name: 'test1'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
