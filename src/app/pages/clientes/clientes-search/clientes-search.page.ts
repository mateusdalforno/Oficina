import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './clientes-search.page.html',
  styleUrls: ['./clientes-search.page.scss'],
})
export class ClientesSearchPage implements OnInit {
  public clientes!: Cliente[];
  

  constructor(
    private clientesService: ClientesService,
    public location: Location
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.clientes = await this.clientesService.getAll();
  }

  async getClientes(searchBar: any) {
    this.clientes = await this.clientesService.getByNome(searchBar.srcElement.value);
  }

  clientesClick(cliente: Cliente){
    this.location.back();
  }

}
