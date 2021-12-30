import { Component, OnInit } from '@angular/core';
import { CvrtabangoService } from '../services/cvrtabango.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvrtabangoService) { }

  ngOnInit(): void {
    
    
  }

}
