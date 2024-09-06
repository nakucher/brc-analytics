import { SHAPE_HEIGHT, SHAPE_WIDTH, X_POSITION, Y_POSITION } from "./constants";

export function calculateDotXPosition(gridSize: number, angle: number): number {
  return gridSize / 2 + (gridSize / 2) * Math.cos(degreesToRadians(angle));
}

export function calculateDotYPosition(gridSize: number, angle: number): number {
  return gridSize / 2 - (gridSize / 2) * Math.sin(degreesToRadians(angle));
}

function degreesToRadians(angle: number): number {
  return (angle * Math.PI) / 180;
}

export function getAnimateMotionTransformDot(
  pos: number,
  gridSize: number,
  gridShift = 0
): string {
  return `${pos} ${gridSize / 2 + gridSize * gridShift} ${gridSize / 2}`;
}

export function getAnimateMotionPathBlueRect(gridSize: number): string {
  return `M 0,0 L -${X_POSITION.BLUE},0 L ${
    gridSize - X_POSITION.BLUE - SHAPE_WIDTH.BLUE_RECT
  },0 L 0,0`;
}

export function getAnimateMotionPathYellowRect(gridSize: number): string {
  return `M 0,0 L 0,${
    gridSize - Y_POSITION.YELLOW - SHAPE_HEIGHT.YELLOW_RECT
  } L 0,-${Y_POSITION.YELLOW} L 0,0`;
}

/**
 * Returns the viewBox attribute for an SVG element.
 * @param width - SVG width.
 * @param height - SVG height.
 * @returns view box.
 */
export function getViewBox(width: number, height: number): string {
  return `0 0 ${width} ${height}`;
}
