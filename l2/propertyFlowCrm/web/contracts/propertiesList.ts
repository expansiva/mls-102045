/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/propertiesList.ts" enhancement="_blank"/>
export interface PropertiesListListarImoveisInput {
  status?: string;
  city?: string;
  neighborhood?: string;
  page?: number;
  pageSize?: number;
}

export interface PropertiesListListarImoveisOutputItem {
  propertyId: string;
  title: string;
  status: string;
  price: number;
  city: string;
  neighborhood: string;
}

export type PropertiesListListarImoveisOutput = PropertiesListListarImoveisOutputItem[];

export interface PropertiesListCriarImovelInput {
  title: string;
  propertyType: string;
  price: number;
  city: string;
  neighborhood: string;
  status: string;
  brokerId: string;
}

export interface PropertiesListCriarImovelOutput {
  propertyId: string;
  status: string;
}
