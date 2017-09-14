import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
  branches = [
    'tvm', 'ekm', 'clt'
  ];

  myData() {
    return "This is my Data";
  }
}
