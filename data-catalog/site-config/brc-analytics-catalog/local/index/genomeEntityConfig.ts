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
