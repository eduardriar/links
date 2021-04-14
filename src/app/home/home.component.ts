import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tempImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB+CAYAAAAN4c62AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAE7SURBVHhe7dExAcAwDMCwdEDCn2X7jIWsxwB8dvdOSN/fgJoPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDmw5oPaz6s+bDms2Ye/WMCVQo/RfwAAAAASUVORK5CYII="
  linkForm = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
