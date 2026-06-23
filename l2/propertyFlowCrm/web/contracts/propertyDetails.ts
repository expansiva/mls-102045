/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.ts" enhancement="_blank"/>
export interface PropertyDetailsObterImovelInput {
  propertyId: string;
}

export interface PropertyDetailsObterImovelOutput {
  propertyId: string;
  title: string;
  address: string;
  price: number;
  status: string;
  description: string;
  features: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export interface PropertyDetailsAtualizarImovelInput {
  propertyId: string;
  title?: string;
  address?: string;
  price?: number;
  status?: string;
  description?: string;
  features?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

export interface PropertyDetailsAtualizarImovelOutput {
  propertyId: string;
  status: string;
  updatedAt: string;
}

export interface PropertyDetailsSolicitarDescricaoImovelInput {
  propertyId: string;
  bullets: string;
}

export interface PropertyDetailsSolicitarDescricaoImovelOutput {
  requestId: string;
  reviewStatus: string;
  createdAt: string;
}

export interface PropertyDetailsListarSolicitacoesDescricaoImovelInput {
  propertyId: string;
}

export interface PropertyDetailsListarSolicitacoesDescricaoImovelOutputItem {
  requests: string;
}

export type PropertyDetailsListarSolicitacoesDescricaoImovelOutput = PropertyDetailsListarSolicitacoesDescricaoImovelOutputItem[];
