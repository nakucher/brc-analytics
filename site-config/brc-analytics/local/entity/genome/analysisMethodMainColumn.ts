import { ComponentsConfig } from "@databiosphere/findable-ui/lib/config/entities";
import * as C from "../../../../../app/components";
import * as MDX from "../../../../../app/components/Entity/components/AnalysisMethod/mdx";
import * as V from "../../../../../app/viewModelBuilders/catalog/brc-analytics-catalog/common/viewModelBuilders";

export const mainColumn: ComponentsConfig = [
  {
    children: [
      {
        component: C.FluidAlert,
        props: {
          severity: "warning",
          title:
            "We are in the process of adopting these workflows to the needs of the pathogen community.",
          variant: "banner",
        },
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.VariantCalling({}),
            title: "Variant calling",
          }),
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.Transcriptomics({}),
            title: "Transcriptomics",
          }),
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.Regulation({}),
            title: "Regulation",
          }),
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.Assembly({}),
            title: "Assembly",
          }),
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.GenomeComparisons({}),
            title: "Genome comparisons",
          }),
      },
      {
        component: C.AnalysisMethod,
        viewBuilder: (r) =>
          V.buildGenomeAnalysisMethod(r, {
            text: MDX.ProteinFolding({}),
            title: "Protein folding",
          }),
      },
    ],
    component: C.BackPageContentMainColumn,
  },
];
