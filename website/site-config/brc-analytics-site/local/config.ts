import { SiteConfig } from "@databiosphere/findable-ui/lib/config/entities";

// Template constants
const LOCALHOST = "http://localhost:3000";
const APP_TITLE = "BRC Analytics";
const BROWSER_URL = LOCALHOST;

export function makeConfig(browserUrl: string): SiteConfig {
  return {
    appTitle: APP_TITLE,
    browserURL: browserUrl,
    dataSource: {
      url: "",
    },
    entities: [],
    explorerTitle: APP_TITLE,
    layout: {
      footer: {
        Branding: "",
      },
      header: {
        logo: "",
      },
    },
    redirectRootToPath: "",
  };
}

const config: SiteConfig = makeConfig(BROWSER_URL);

export default config;
