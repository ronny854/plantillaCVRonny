import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvrtabangoService {
  profesional: any[] = [];
  educacion: any[]=[];
  servicios: any[]=[];
  contacto: any[]=[];
  portafolio: any[]=[];
  experiencia: any[]=[];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarServicios();
    this.CargarContacto();
    this.CargarPortafolio();
    this.CargarExperiencia();
  }

  private CargarProfesional() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;
        console.log(this.profesional);
      });
  }

  private CargarEducacion() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;
        console.log(this.educacion);
      });
  }

  private CargarServicios() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe((resp: any) => {
        this.servicios = resp;
        console.log(this.servicios);
      });
  }

  private CargarContacto() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Contacto.json')
      .subscribe((resp: any) => {
        this.contacto = resp;
        console.log(this.servicios);
      });
  }

  private CargarPortafolio() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Portafolio.json')
      .subscribe((resp: any) => {
        this.portafolio = resp;
        console.log(this.portafolio);
      });
  }
  private CargarExperiencia() {
    this.http
      .get('https://cv-ronny-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;
        console.log(this.experiencia);
      });
  }
}
