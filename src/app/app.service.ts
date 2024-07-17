import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './app.interfaces';


@Injectable(
  {providedIn: 'root'}
)
export class AppService {
  constructor(
    private http : HttpClient
  ) {}

  getByCep(cep: string){
    return this.http.get<Address>('https://viacep.com.br/ws/'+cep+'/json/');
  }

  setStorageAddres(address: Address){
    localStorage.setItem('dadosEndereco', JSON.stringify(address));
  }
}
