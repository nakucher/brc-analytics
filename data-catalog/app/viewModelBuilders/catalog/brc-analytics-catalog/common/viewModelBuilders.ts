import { BRCDataCatalogGenome } from "../../../../apis/catalog/brc-analytics-catalog/common/entities";
import * as C from "../../../../components/index";

/**
 * Build props for the species cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildSpecies = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.species,
  };
};
