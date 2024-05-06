import { chakra } from "@chakra-ui/react";

export const CustomTd = chakra("td", {
  baseStyle: {
    paddingTop: "1px",
    paddingBottom: "1px",
    borderBottom: "1px solid var(--chakra-colors-green-100)",
  },
});