export type DataType = {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: Array<DomainDataType>;
};

export type DomainDataType = DataType & {
  edite: boolean;
  parentId: number | null;
};
