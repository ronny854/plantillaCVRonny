import { Component, OnInit } from '@angular/core';
import { CvrtabangoService } from '../services/cvrtabango.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public cv: CvrtabangoService) { }

  ngOnInit(): void {
  }

}
