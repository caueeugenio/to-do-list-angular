import { Component, OnInit } from '@angular/core';
import { faEthernet, faHome, faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homeIcon = faHome;
  addIcon = faPlus;
 
  viewIcon = faEthernet;
  constructor() { }

  ngOnInit() {
  }

}
