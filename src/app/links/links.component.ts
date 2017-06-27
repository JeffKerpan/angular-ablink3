import { Component, OnInit } from '@angular/core';

import { LinksService } from '../shared/links.service'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links;

  constructor(private _linksService: LinksService) { }

  ngOnInit() {
    this.links = this._linksService.links;
  }

  addLink(name, url) {
    this._linksService.addLink(name, url);
  }

}
