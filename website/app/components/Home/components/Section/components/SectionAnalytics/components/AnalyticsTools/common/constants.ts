import { CardProps as DXCardProps } from "@databiosphere/findable-ui/lib/components/common/Card/card";

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
        url: "https://brc.usegalaxy.org",
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
        url: "https://www.ncbi.nlm.nih.gov/datasets",
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
        url: "https://genome.ucsc.edu/cgi-bin/hgTracks?db=hub_3099159_GCF_000002765.5&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=chr14%3A1097312-1107312&hgsid=2334740048_JURjoJTpdZ1arRgPWCUOn1kbfI2r",
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
        url: "https://tacc.utexas.edu",
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
