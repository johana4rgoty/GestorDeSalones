export interface MateriaI {
    matId: number;
    matCodigo: string;
    matNombre: string;
    matEstudiantes: number;
    matIntensidadHoraria: number;
    matPrioridadHorario: string; // (mañana o tarde)
    matRestriccionSalon: string; // normal, laboratorio, auditorio, salaSistemas
    matNombreProfesor: string;
    matContactoProfesor ?: string; // opcional
    coordinador_cooId: number;
}
// https://www.youtube.com/watch?v=W3zKlewOi1k&list=PL_9MDdjVuFjFPCptPjhr3iuzPK0_Nrm0s&index=3
