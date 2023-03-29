import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoServicosService } from 'src/app/services/tipo-servicos.service';

@Component({
  selector: 'app-tipo-servicos-add-edit',
  templateUrl: './tipo-servicos-add-edit.page.html',
  styleUrls: ['./tipo-servicos-add-edit.page.scss'],
})
export class TipoServicosAddEditPage implements OnInit {
  public tipoServico: any;
  public modoDeEdicao = false;
  public tipoServicosForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private tipoServicoService: TipoServicosService,
    private formBuilder: FormBuilder
  ) { }

  iniciarEdicao(){
    this.modoDeEdicao = true;
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoServico = this.tipoServicoService.getById(id);
    this.tipoServicosForm = this.formBuilder.group({
      id,
      nome: [this.tipoServico.nome, Validators.required],
      valor: [this.tipoServico.valor, Validators.required]
    });
  }

  submit(){

  }
  cancelarEdicao(){
    
  }

}
