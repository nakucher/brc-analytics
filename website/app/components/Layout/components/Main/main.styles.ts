import { Main as DXMain } from "@databiosphere/findable-ui/lib/components/Layout/components/Main/main";
import { smokeMain } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import styled from "@emotion/styled";

export const StyledMain = styled(DXMain)`
  background-color: ${smokeMain};
  flex-direction: column;
  gap: 1px;
`;
