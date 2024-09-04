import { BRCDataCatalogGenome } from "./entities";

export function getGenomeId(genome: BRCDataCatalogGenome): string {
  return genome.genomeVersionAssemblyId;
}

export function getGenomeTitle(genome?: BRCDataCatalogGenome): string {
  if (!genome) return "";
  return `${genome.species} - ${genome.strain}`;
}
