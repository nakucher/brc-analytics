import {
  ComponentConfig,
  ComponentsConfig,
} from "@databiosphere/findable-ui/lib/config/entities";
import * as C from "../../../../app/components";
import * as V from "../../../../app/viewModelBuilders/catalog/brc-analytics-catalog/common/viewModelBuilders";

export const listHero: ComponentsConfig = [
  {
    component: C.FluidAlert,
    viewBuilder: V.buildOrganismListHero,
  } as ComponentConfig<typeof C.FluidAlert>,
];
