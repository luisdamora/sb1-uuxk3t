import { EEtapa } from "@/types/IEtapa.ts";

export interface IPrecio {
  tipo: EEtapa;
  valor: number;
}

export function obtenerPrecioActual(): IPrecio {
  const ahora = new Date();
  const dia = ahora.getDate();
  const mes = ahora.getMonth() + 1; // Los meses en JavaScript van de 0 a 11

  // Lógica para determinar el precio según la fecha actual
  if (mes === 10 && dia <= 31) {
    return { tipo: EEtapa.ETAPA_1, valor: 120000 };
  } else if (mes === 11 && dia <= 8) {
    return { tipo: EEtapa.ETAPA_2, valor: 160000 };
  } else if (mes === 11 && dia === 9) {
    return { tipo: EEtapa.ETAPA_3, valor: 180000 };
  } else {
    // Manejar fechas fuera del rango
    return { tipo: EEtapa.ETAPA_3, valor: 180000 }; // O cualquier otro valor por defecto
  }
}
