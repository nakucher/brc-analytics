import { SiteConfig } from "@databiosphere/findable-ui/lib/config/entities";
import { genomeEntityConfig } from "./index/genomeEntityConfig";

// Template constants
const LOCALHOST = "http://localhost:3000";
const APP_TITLE = "BRC Analytics Data Catalog";
const BROWSER_URL = LOCALHOST;

export function makeConfig(browserUrl: string): SiteConfig {
  return {
    appTitle: APP_TITLE,
    browserURL: browserUrl,
    dataSource: {
      url: "",
    },
    entities: [genomeEntityConfig],
    explorerTitle: APP_TITLE,
    layout: {
      footer: {
        Branding: "",
      },
      header: {
        logo: "",
      },
    },
    redirectRootToPath: "/genomes",
  };
}

const config: SiteConfig = makeConfig(BROWSER_URL);

export default config;
