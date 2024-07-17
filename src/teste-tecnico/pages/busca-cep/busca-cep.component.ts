import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IMaskModule } from 'angular-imask';
import { AppService } from '../../../app/app.service';
import { Address } from '../../../app/app.interfaces';

@Component({
  selector: 'app-busca-cep',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    IMaskModule
  ],
  templateUrl: './busca-cep.component.html',
  styleUrl: './busca-cep.component.scss'
})
export class BuscaCepComponent implements OnInit {

  //Declarações de variáveis
  formParams!: FormGroup;
  isDisabledSaveButton: boolean = true;
  loading: boolean = false;
  isShowMsg: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }

  ngOnInit(): void {
    //Instancia o formulário vazio
    this.formParams = this.fb.group({
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      localidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      ibge: [{ value: '', disabled: true }, [Validators.required]],
      gia: ['', [Validators.required]],
      ddd: ['', [Validators.required]],
      siafi: [{ value: '', disabled: true }, [Validators.required]]
    })
    //Controla o estado do botão (ativo/inativo)
    this.formParams.statusChanges.subscribe(status => {
      this.isDisabledSaveButton = status !== 'VALID';
    });
    //Chama a função de buscar CEP
    this.buscaCep('30160907');
  }

  buscaCep(cep: string) {
    this.loading = true;
    /*
      Chama o serviço de buscar CEP passando por parametro o CEP
      OBS: Com poucas alterações, seria possível inserir um campo de busca por CEP. 
      Já deixei a função e o service prontos.
    */
    this.service.getByCep(cep).subscribe(result => {
      this.formParams.patchValue(result);
      this.loading = false;
    });
  }

  formSubmit(formData:Address) {
    //Chama o serviço para salvar os dados em localstorage passando os dados do formulário por parâmetro
    this.service.setStorageAddres(formData);
    this.isShowMsg = true;
  }

}
