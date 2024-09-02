export interface BRCDataCatalogGenome {
  chromosomes: number;
  contigs: number;
  genomeVersionAssemblyId: string;
  organism: string;
  species: string;
  strain: string;
  supercontigs: number;
  ucscBrowserUrl: string | null;
  vEuPathDbProject: string;
}
