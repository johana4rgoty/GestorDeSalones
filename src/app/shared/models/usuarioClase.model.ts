export class UsuarioClase {
    public id: number;
    public nombre: string;
    public correo: string;
    public usuario: string;
    public passwd: string;
    public programa: string;
    public tipoUsuario: string;

    constructor(id: number, nombre: string, correo: string, usuario: string, pwd: string, programa: string, tipoUsu: string) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.usuario = usuario;
    this.passwd = pwd;
    this.programa = programa;
    this.tipoUsuario = tipoUsu;
    }
}