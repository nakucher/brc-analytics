import {
  ComponentConfig,
  ComponentsConfig,
} from "@databiosphere/findable-ui/lib/config/entities";
import * as C from "../../../../../app/components";
import * as V from "../../../../../app/viewModelBuilders/catalog/brc-analytics-catalog/common/viewModelBuilders";

export const top: ComponentsConfig = [
  {
    component: C.DetailViewHero,
    viewBuilder: V.buildGenomeChooseAnalysisMethodDetailViewHero,
  } as ComponentConfig<typeof C.DetailViewHero>,
];
