import { DateTime } from "ionic-angular";

export class UsuarioComplexo {
    
    "codigo": number;
    "codigoTipoUsuario": number;
    "senha": string;
    "notas": null;
    "matricula": string;
    "nomeCompleto": string;
    "dataNascimento": DateTime;
    "dataInclusao": DateTime;
    "dataExclusao": DateTime;
    "endereco": {
            "codigoUsuario": number;
            "cep": string;
            "bairro": string;
            "cidade": string;
            "logradouro": string;
            "numero": null;
            "uf": {
                "nome": string;
                "sigla": string;
                "codigo": number;
                "data": DateTime;
            },
            "usuario": null;
            "codigo": number;
            "data": DateTime;
        }
        "contato": null;
        "tipoUsuario": {
            "nome": string;
            "usuarios": null;
            "codigo": number;
            "data": DateTime;
        }
        "cursoAluno": null;
        "curso": {
            "codigo": number;
            "codigoTurno": number;
            "codigoGradeCurso": number;
            "cargaHoraria": number;
            "turno": null;
            "valor": number;
            "periodo": DateTime;
            "duracao": string;
            "nome": string;
            "turma": null;
            "cursoAluno": null;
        }
    }
