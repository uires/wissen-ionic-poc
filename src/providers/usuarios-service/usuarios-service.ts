import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { UsuarioComplexo } from '../../app/models/usariocomplexo';


@Injectable()
export class UsuariosServiceProvider {

  public usarioLogado: UsuarioComplexo;

  constructor(private _http: HttpClient) { }

  efetuarLogin(matricula, senha) {

    return this._http.post<UsuarioComplexo>('https://localhost:5001/api/usuario/login/', {matricula, senha}).do( usuario => this.usarioLogado = usuario);
  }

  /*buscarUsuarioCompleto(idUsuario: number): Observable<UsuarioComplexo> {

    return this._http.get<UsuarioComplexo>('https://localhost:5001/api/usuario/4');
  }
  */
  obtemUsuarioLogado(): UsuarioComplexo {
    
    return this.usarioLogado;
  }
}
