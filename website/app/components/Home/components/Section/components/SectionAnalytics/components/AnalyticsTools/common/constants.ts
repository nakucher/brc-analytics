import { CardProps as DXCardProps } from "@databiosphere/findable-ui/lib/components/common/Card/card";
import { URLS } from "../../../../../../../common/constants";

const CARD_ACTION_LABEL = {
  LEARN_MORE: "Learn More",
};
const CARD_TEXT = {
  RUN_BATCH_ANALYSIS_WORKFLOWS:
    "Run batch analysis workflows and interactive visualizations.",
};

export const ANALYTICS_TOOLS: DXCardProps[] = [
  {
    cardActions: [
      {
        label: CARD_ACTION_LABEL.LEARN_MORE,
        url: URLS.GALAXY_SYSTEM,
      },
    ],
    media: {
      alt: "Galaxy",
      height: 40,
      src: "/portals/galaxy.png",
    },
    text: CARD_TEXT.RUN_BATCH_ANALYSIS_WORKFLOWS,
    title: "Galaxy",
  },
  {
    cardActions: [
      {
        label: CARD_ACTION_LABEL.LEARN_MORE,
        url: URLS.NCBI_DATASETS,
      },
    ],
    media: {
      alt: "NCBI Datasets",
      height: 40,
      src: "/portals/ncbi.png",
    },
    text: CARD_TEXT.RUN_BATCH_ANALYSIS_WORKFLOWS,
    title: "NCBI Datasets",
  },
  {
    cardActions: [
      {
        label: CARD_ACTION_LABEL.LEARN_MORE,
        url: URLS.UCSC_GENOME_BROWSER,
      },
    ],
    media: {
      alt: "UCSC Genome Browser",
      height: 40,
      src: "/portals/ucsc.png",
    },
    text: CARD_TEXT.RUN_BATCH_ANALYSIS_WORKFLOWS,
    title: "UCSC Genome Browser",
  },
  {
    cardActions: [
      {
        label: CARD_ACTION_LABEL.LEARN_MORE,
        url: URLS.TACC,
      },
    ],
    media: {
      alt: "TACC",
      height: 40,
      src: "/portals/tacc.png",
    },
    text: CARD_TEXT.RUN_BATCH_ANALYSIS_WORKFLOWS,
    title: "TACC",
  },
];
