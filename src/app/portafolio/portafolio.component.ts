import { Component, OnInit } from '@angular/core';
import { CvrtabangoService } from '../services/cvrtabango.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public cv: CvrtabangoService) { }

  ngOnInit(): void {
  }

}
