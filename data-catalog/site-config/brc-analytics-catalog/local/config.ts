import { SiteConfig } from "@databiosphere/findable-ui/lib/config/entities";
import * as C from "../../../app/components";
import { ROUTES } from "../../../app/routes/constants";
import { genomeEntityConfig } from "./index/genomeEntityConfig";

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
    entities: [genomeEntityConfig],
    explorerTitle: null,
    layout: {
      footer: {
        Branding: C.Branding(),
      },
      header: {
        logo: C.Logo({
          alt: APP_TITLE,
          height: 26,
          link: "/",
          src: "/logo/brc.svg",
        }),
        navigation: [
          undefined,
          [{ label: "Datasets", url: ROUTES.GENOMES }],
          undefined,
        ],
      },
    },
    redirectRootToPath: "/",
    themeOptions: { palette: { primary: { main: "#FC5E60" } } },
  };
}

const config: SiteConfig = makeConfig(BROWSER_URL);

export default config;
