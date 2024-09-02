import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
  SORT_DIRECTION,
} from "@databiosphere/findable-ui/lib/config/entities";
import { EXPLORE_MODE } from "@databiosphere/findable-ui/lib/hooks/useExploreMode";
import { BRCDataCatalogGenome } from "../../../../app/apis/catalog/brc-analytics-catalog/common/entities";
import { getGenomeId } from "../../../../app/apis/catalog/brc-analytics-catalog/common/utils";
import * as C from "../../../../app/components/index";
import * as V from "../../../../app/viewModelBuilders/catalog/brc-analytics-catalog/common/viewModelBuilders";
import {
  BRC_DATA_CATALOG_CATEGORY_KEY,
  BRC_DATA_CATALOG_CATEGORY_LABEL,
} from "../../category";

/**
 * Entity config object responsible to config anything related to the /genomes route.
 */
export const genomeEntityConfig: EntityConfig<BRCDataCatalogGenome> = {
  categoryGroupConfig: {
    categoryGroups: [
      {
        categoryConfigs: [
          {
            key: BRC_DATA_CATALOG_CATEGORY_KEY.SPECIES,
            label: BRC_DATA_CATALOG_CATEGORY_LABEL.SPECIES,
          },
          {
            key: BRC_DATA_CATALOG_CATEGORY_KEY.STRAIN,
            label: BRC_DATA_CATALOG_CATEGORY_LABEL.STRAIN,
          },
          {
            key: BRC_DATA_CATALOG_CATEGORY_KEY.GENOME_VERSION_ASSEMBLY_ID,
            label: BRC_DATA_CATALOG_CATEGORY_LABEL.GENOME_VERSION_ASSEMBLY_ID,
          },
          {
            key: BRC_DATA_CATALOG_CATEGORY_KEY.VEUPATHDB_PROJECT,
            label: BRC_DATA_CATALOG_CATEGORY_LABEL.VEUPATHDB_PROJECT,
          },
        ],
      },
    ],
    key: "genomes",
  },
  detail: {
    detailOverviews: [],
    staticLoad: false,
    tabs: [],
    top: [],
  },
  exploreMode: EXPLORE_MODE.CS_FETCH_CS_FILTERING,
  explorerTitle: "Genomes",
  getId: getGenomeId,
  label: "Genomes",
  list: {
    columns: [
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildSpecies,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.SPECIES,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.SPECIES,
        width: { max: "1.5fr", min: "212px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildStrain,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.STRAIN,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.STRAIN,
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildGenomeVersionAssemblyId,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.GENOME_VERSION_ASSEMBLY_ID,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.GENOME_VERSION_ASSEMBLY_ID,
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildVEuPathDbProject,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.VEUPATHDB_PROJECT,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.VEUPATHDB_PROJECT,
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildContigs,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.CONTIGS,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.CONTIGS,
        width: { max: "0.5fr", min: "112px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildSupercontigs,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.SUPERCONTIGS,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.SUPERCONTIGS,
        width: { max: "0.5fr", min: "112px" },
      },
      {
        componentConfig: {
          component: C.BasicCell,
          viewBuilder: V.buildChromosomes,
        } as ComponentConfig<typeof C.BasicCell, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.CHROMOSOMES,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.CHROMOSOMES,
        width: { max: "0.5fr", min: "112px" },
      },
      {
        componentConfig: {
          component: C.Link,
          viewBuilder: V.buildUcscBrowserUrl,
        } as ComponentConfig<typeof C.Link, BRCDataCatalogGenome>,
        header: BRC_DATA_CATALOG_CATEGORY_LABEL.UCSC_BROWSER_URL,
        id: BRC_DATA_CATALOG_CATEGORY_KEY.UCSC_BROWSER_URL,
        width: { max: "1fr", min: "160px" },
      },
    ],
    defaultSort: {
      desc: SORT_DIRECTION.ASCENDING,
      id: BRC_DATA_CATALOG_CATEGORY_KEY.SPECIES,
    },
  } as ListConfig<BRCDataCatalogGenome>,
  listView: {
    disablePagination: true,
    enableDownload: true,
    enableTab: false,
  },
  route: "genomes",
  staticLoadFile: "files/out/genomes.json",
};
