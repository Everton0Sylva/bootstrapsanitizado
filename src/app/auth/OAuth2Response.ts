import {Injectable} from '@angular/core';


@Injectable()
export class OAuth2Response {

    private _access_token = null;
    private _expires_in = null;
    private _token_type = null;
    private _scope = null;
    private _refresh_token = null;
    private _id: any
    private _seproId;
    private _cnpj;
    private _nome;
    private _habilitado;
    private _uf;
    private _tamanhoLote;
    private _type;

    constructor() {
   this._access_token = null;
   this._expires_in = null;
   this._token_type = null;
   this._scope = null;
   this._refresh_token = null;
    }


    get id(): any {
        if (this._id === undefined || this._id == null) {
            this._id = JSON.parse(localStorage.getItem('_id'));
        }
        return this._id;
    }

    set id(value: any) {
        localStorage.setItem('id',  value);
        this._id = value;
    }

    get seproId() {
        if (this._seproId === undefined || this._seproId == null) {
            this._seproId = JSON.parse(localStorage.getItem('_seproId'));
        }
        return this._seproId;
    }

    set seproId(value) {
        localStorage.setItem('seproId',  value);
        this._seproId = value;
    }

    get cnpj() {
        if (this._cnpj === undefined || this._cnpj == null) {
            this._cnpj = JSON.parse(localStorage.getItem('_cnpj'));
        }
        return this._cnpj;
    }

    set cnpj(value) {
        localStorage.setItem('cnpj',  value);
        this._cnpj = value;
    }

    get nome() {
        if (this._nome === undefined || this._nome == null) {
            this._nome = JSON.parse(localStorage.getItem('_nome'));
        }
        return this._nome;
    }

    set nome(value) {
        localStorage.setItem('nome',  value);
        this._nome = value;
    }

    get habilitado() {
        if (this._habilitado === undefined || this._habilitado == null) {
            this._habilitado = JSON.parse(localStorage.getItem('_habilitado'));
        }
        return this._habilitado;
    }

    set habilitado(value) {
        localStorage.setItem('habilitado',  value);
        this._habilitado = value;
    }

    get uf() {
        if (this._uf === undefined || this._uf == null) {
            this._uf = JSON.parse(localStorage.getItem('_uf'));
        }
        return this._uf;
    }

    set uf(value) {
        localStorage.setItem('uf',  value);
        this._uf = value;
    }

    get tamanhoLote() {
        if (this._tamanhoLote === undefined || this._tamanhoLote == null) {
            this._tamanhoLote = JSON.parse(localStorage.getItem('_tamanhoLote'));
        }
        return this._tamanhoLote;
    }

    set tamanhoLote(value) {
        localStorage.setItem('tamanhoLote', value);
        this._tamanhoLote = value;
    }

    get type() {
        if (this._type === undefined || this._type == null) {
            this._type = JSON.parse(localStorage.getItem('_type'));
        }
        return this._type;
    }

    set type(value) {
        localStorage.setItem('type', value);
        this._type = value;
    }

    get access_token() {
        if (this._access_token === undefined || this._access_token == null) {
                   this._access_token = JSON.parse(localStorage.getItem('_access_token'));
        }
        return this._access_token;
    }

    set access_token(value) {
        this._access_token = value;
        localStorage.setItem('_access_token', JSON.stringify(value));
    }

    get expires_in() {
        if (this._expires_in === undefined || this._expires_in == null) {
            this._expires_in = JSON.parse(localStorage.getItem('_expires_in'));
        }
        return this._expires_in;
    }

    set expires_in(value) {
        this._expires_in = value;
        localStorage.setItem('_expires_in', JSON.stringify(value));
    }

    get token_type() {
        if (this._token_type === undefined || this._token_type == null) {
            this._token_type = JSON.parse(localStorage.getItem('_token_type'));
        }
        return this._token_type;
    }

    set token_type(value) {
        this._token_type = value;
        localStorage.setItem('_token_type', JSON.stringify(value));
    }

    get scope() {
        if (this._scope === undefined || this._scope == null) {
            this._scope = JSON.parse(localStorage.getItem('_scope'));
        }
        return this._scope;
    }

    set scope(value) {
        this._scope = value;
        localStorage.setItem('_scope', JSON.stringify(value));
    }

    get refresh_token() {
        if (this._refresh_token === undefined || this._refresh_token == null) {
            this._refresh_token = JSON.parse(localStorage.getItem('_refresh_token'));
        }
        return this._refresh_token;
    }

    set refresh_token(value) {
        this._refresh_token = value;
        localStorage.setItem('_refresh_token', JSON.stringify(value));
   }
}
