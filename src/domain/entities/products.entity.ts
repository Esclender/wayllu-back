
export default interface Products{
    id: string;   
    ITEM: number;
    ANCHO: number | null;
    ALTO: number | null;
    TIPO_PESO: string;
    PESO: number | null;
    CANTIDAD: number;
    CATEGORIA: string;
    IMAGEN: string  | null;
    DESCRIPCION : string;
    COD_FAMILIA: number;
    COD_ARTESANA: number;
    COD_ORDEN_PRO: number;
    COD_PRODUCTO: number;
    FECHA_INGRESO: Date | null;
    UBICACION: string | null;
  }