import { HttpClient } from '@angular/common/http';
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

  formParams!: FormGroup;
  isDisabledSaveButton: boolean = true;
  loading: boolean = false;  

  constructor(
    private http : HttpClient,
    private fb: FormBuilder,
    private service: AppService
  ) { }

  ngOnInit(): void {
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
    this.formParams.statusChanges.subscribe(status => {
      this.isDisabledSaveButton = status !== 'VALID'; // Disable when not valid
    });
    this.buscaCep('30160907');
  }

  buscaCep(cep: string) {
    this.loading = true;
    this.service.getByCep(cep).subscribe(result => {
      this.formParams.patchValue(result);
      this.loading = false;
      console.log(result)
    });
  }

  formSubmit(formData:Address) {
    console.log(formData);
    this.service.setStorageAddres(formData);
  }

}
