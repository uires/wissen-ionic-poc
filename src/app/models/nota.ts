import { DateTime } from "ionic-angular";

export class Nota {
    codigo: number;
    codigoUsuario: number;
    codigoBoletim: number;
    codigoCurso: number;
    codigoDisciplina: number;
    primeiraNota: number;
    segundaNota: number;
    terceiraNota: number;
    quartaNota: number;
    notaFinal: number;
    media: number;
    dataIncluesao: DateTime;
    aluno: {
        "codigo": number;
        "codigoTipoUsuario": number;
        "senha": null;
        "notas": null;
        "matricula": null;
        "nomeCompleto": string;
        "dataNascimento": DateTime;
        "dataInclusao": DateTime;
        "dataExclusao": DateTime;
        "endereco": null;
        "contato": null;
        "tipoUsuario": null;
        "cursoAluno": null;
        "curso": null
    };
    "curso": null;
    "disciplina": {
        "codigo": number;
        "cargaHoraria": number;
        "nome": string;
        "dataInclusao": DateTime;
        "dataExclusao": DateTime;
        "descricao": null;
        "label": string;
        "nota": null
    };
    "boletim": null;
    "docente": {
        "codigo": number;
        "codigoTipoUsuario": number;
        "senha": null;
        "notas": null;
        "matricula": null;
        "nomeCompleto": "Ívone Lordeiro";
        "dataNascimento": DateTime;
        "dataInclusao": DateTime;
        "dataExclusao": DateTime;
        "endereco": string;
        "contato": string;
        "tipoUsuario": string;
        "cursoAluno": string;
        "curso": string
    }

}