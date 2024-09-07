import { PATTERN_ID } from "./entities";

export const ANIMATE_MOTION = {
  begin: "1s",
  dur: "40s",
  repeatCount: "indefinite",
};

export const FILL = {
  BLUE: "#28285B",
  NONE: "none",
  PINK: "#FC5E60",
  SMOKE: "#E1E3E5",
  YELLOW: "#FEDC6E",
};

export const GRID_SIZE = 297;

export const PATTERN_URLS = [
  PATTERN_ID.GRID,
  PATTERN_ID.CIRCLE,
  PATTERN_ID.YELLOW_RECT,
  PATTERN_ID.BLUE_RECT,
  PATTERN_ID.BLUE_DOT,
  PATTERN_ID.PINK_DOT,
];

export const SHAPE_HEIGHT = {
  BLUE_DOT: 18,
  BLUE_RECT: 6,
  YELLOW_RECT: 49,
};

export const SHAPE_WIDTH = {
  BLUE_DOT: 18,
  BLUE_RECT: 49,
  YELLOW_RECT: 6,
};

export const X_POSITION = {
  BLUE_RECT: 100,
};

export const Y_POSITION = {
  YELLOW_RECT: 200,
};
