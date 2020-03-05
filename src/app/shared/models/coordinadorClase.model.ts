export class CoordinadorClase {
    public cooId: number;
    public cooNombre: string;
    public cooCorreo: string;
    public cooUsuario: string;
    public cooPasswd: string;
    public cooPrograma: string;

    constructor(id: number, nombre: string, correo: string, usuario: string, pwd: string, programa: string) {
    this.cooId = id;
    this.cooNombre = nombre;
    this.cooCorreo = correo;
    this.cooUsuario = usuario;
    this.cooPasswd = pwd;
    this.cooPrograma = programa;
    }
}