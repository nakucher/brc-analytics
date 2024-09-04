import { BRCDataCatalogGenome } from "./entities";

export function getGenomeId(genome: BRCDataCatalogGenome): string {
  return genome.genomeVersionAssemblyId;
}
