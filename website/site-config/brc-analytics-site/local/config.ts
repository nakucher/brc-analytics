import { SiteConfig } from "@databiosphere/findable-ui/lib/config/entities";
import * as C from "../../../app/components";

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
        logo: C.Logo({
          alt: APP_TITLE,
          height: 26,
          link: "/",
          src: "/logo/brc.svg",
        }),
      },
    },
    redirectRootToPath: "",
  };
}

const config: SiteConfig = makeConfig(BROWSER_URL);

export default config;
