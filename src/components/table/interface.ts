export interface DataPros {
  index: string;
  obrigatorio: "*" | "#" | ""; // <<*>> obrigatário <<#>> condicional <<>> não obrigatário
  campo: string;
  notas: string;
  formato: string;
  children?: DataPros[] | null;
}

export interface TableProps {
  data: DataPros[];
}
