export enum EEtapa {
  ETAPA_1 = "ETAPA_1",
  ETAPA_2 = "ETAPA_2",
  ETAPA_3 = "ETAPA_3",
}

export interface IEtapa {
  etapa: EEtapa;
  title: string;
  deadline: string;
  price: string;
  mount: number;
}
