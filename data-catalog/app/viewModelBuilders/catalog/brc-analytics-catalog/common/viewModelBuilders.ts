import { BRCDataCatalogGenome } from "../../../../apis/catalog/brc-analytics-catalog/common/entities";
import * as C from "../../../../components/index";

/**
 * Build props for the genome analysis cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the AnalyzeGenome component.
 */
export const buildAnalyzeGenome = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.AnalyzeGenome> => {
  return {
    genome,
  };
};

/**
 * Build props for the chromosomes cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildChromosomes = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.chromosomes,
  };
};

/**
 * Build props for the contigs cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildContigs = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.contigs,
  };
};

/**
 * Build props for the genome version/assembly ID cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildGenomeVersionAssemblyId = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.genomeVersionAssemblyId,
  };
};

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

/**
 * Build props for the strain cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildStrain = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.strain,
  };
};

/**
 * Build props for the supercontigs cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildSupercontigs = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.supercontigs,
  };
};

/**
<<<<<<< HEAD
 * Build props for the UCSC browser URL cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildUcscBrowserUrl = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.Link> => {
  return {
    label: "UCSC Browser",
    url: genome.ucscBrowserUrl,
  };
};

/**
=======
>>>>>>> 94283b9 (feat: add 'analysis' section (#18))
 * Build props for the VEuPathDB project cell.
 * @param genome - Genome entity.
 * @returns Props to be used for the cell.
 */
export const buildVEuPathDbProject = (
  genome: BRCDataCatalogGenome
): React.ComponentProps<typeof C.BasicCell> => {
  return {
    value: genome.vEuPathDbProject,
  };
};
