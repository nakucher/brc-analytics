import { Fragment } from "react";
import {
  ANIMATE_MOTION,
  FILL,
  GRID_SIZE,
  SHAPE_HEIGHT,
  SHAPE_WIDTH,
  X_POSITION,
  Y_POSITION,
} from "./common/constants";
import { Height, PATTERN_UNIT } from "./common/entities";
import {
  calculateDotXPosition,
  calculateDotYPosition,
  getAnimateMotionPathBlueRect,
  getAnimateMotionPathYellowRect,
  getAnimateMotionTransformDot,
  getViewBox,
} from "./common/utils";

export interface HeroProps {
  gridSize?: number;
  height?: Height;
}

export const Hero = ({
  gridSize = GRID_SIZE,
  height = GRID_SIZE * 3,
}: HeroProps): JSX.Element => {
  return (
    <Fragment>
      <svg
        fill={FILL.NONE}
        height={height}
        preserveAspectRatio="xMinYMin meet"
        viewBox={getViewBox(gridSize, height)}
        width="100vw"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background - boxes */}
          <g id="groupBox" opacity="0.5">
            <rect
              fill={FILL.NONE}
              height={gridSize}
              stroke={FILL.SMOKE}
              width={gridSize}
              x="0"
              y="0"
            />
          </g>
          {/* Background -circles */}
          <g id="groupCircle" opacity="0.5">
            <circle
              cx={gridSize / 2}
              cy={gridSize / 2}
              r={gridSize / 2}
              stroke={FILL.SMOKE}
            />
            <circle
              cx={gridSize / 2 + gridSize * 4}
              cy={gridSize / 2}
              r={gridSize / 2}
              stroke={FILL.SMOKE}
            />
            <circle
              cx={gridSize / 2 + gridSize * 6}
              cy={gridSize / 2}
              r={gridSize / 2}
              stroke={FILL.SMOKE}
            />
          </g>
          {/* Blue dot */}
          <g id="groupBlueDot">
            <circle
              cx={calculateDotXPosition(gridSize, 310)}
              cy={calculateDotYPosition(gridSize, 310)}
              r={SHAPE_HEIGHT.BLUE_DOT / 2}
              fill={FILL.BLUE}
            >
              <animateTransform
                {...ANIMATE_MOTION}
                attributeName="transform"
                from={getAnimateMotionTransformDot(0, gridSize)}
                to={getAnimateMotionTransformDot(360, gridSize)}
                type="rotate"
              />
            </circle>
          </g>
          {/* Pink dot */}
          <g id="groupPinkDot">
            <circle
              cx={gridSize * 4 + calculateDotXPosition(gridSize, 135)}
              cy={calculateDotYPosition(gridSize, 135)}
              r={SHAPE_HEIGHT.BLUE_DOT / 2}
              fill={FILL.PINK}
            >
              <animateTransform
                {...ANIMATE_MOTION}
                attributeName="transform"
                from={getAnimateMotionTransformDot(0, gridSize, 4)}
                to={getAnimateMotionTransformDot(360, gridSize, 4)}
                type="rotate"
              />
            </circle>
          </g>
          {/* Yellow rect */}
          <g id="groupYellow">
            <rect
              fill={FILL.YELLOW}
              height={SHAPE_HEIGHT.YELLOW_RECT}
              rx="3"
              width={SHAPE_WIDTH.YELLOW_RECT}
              y={Y_POSITION.YELLOW}
            >
              <animateMotion
                {...ANIMATE_MOTION}
                path={getAnimateMotionPathYellowRect(gridSize)}
              />
            </rect>
          </g>
          {/* Blue rect */}
          <g id="groupBlue">
            <rect
              fill={FILL.BLUE}
              height={SHAPE_HEIGHT.BLUE_RECT}
              rx="3"
              x={X_POSITION.BLUE}
              width={SHAPE_WIDTH.BLUE_RECT}
            >
              <animateMotion
                {...ANIMATE_MOTION}
                path={getAnimateMotionPathBlueRect(gridSize)}
              />
            </rect>
          </g>
          {/* Box pattern */}
          <pattern
            height={gridSize}
            id="patternGrid"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            width={gridSize}
          >
            <use href="#groupBox" />
          </pattern>
          {/* Circle pattern */}
          <pattern
            height={gridSize * 2}
            id="patternCirle"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            width={gridSize * 8}
          >
            <use href="#groupCircle" />
            <use
              href="#groupCircle"
              transform={`translate(${gridSize}, ${gridSize})`}
            />
          </pattern>
          {/* Blue dot pattern */}
          <pattern
            height={gridSize * 2}
            id="patternBlueDot"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            width={gridSize * 8}
          >
            <use href="#groupBlueDot" />
          </pattern>
          {/* Pink dot pattern */}
          <pattern
            height={gridSize * 2}
            id="patternPinkDot"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            width={gridSize * 8}
          >
            <use href="#groupPinkDot" />
          </pattern>
          {/* Yellow rect pattern */}
          <pattern
            height={gridSize * 2}
            id="patternYellow"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            x={gridSize * 2 - SHAPE_WIDTH.YELLOW_RECT / 2}
            y={0}
            width={gridSize * 8}
          >
            <use href="#groupYellow" />
          </pattern>
          {/* Blue rect pattern */}
          <pattern
            height={gridSize * 2}
            id="patternBlue"
            patternUnits={PATTERN_UNIT.USER_SPACE_ON_USE}
            x={gridSize * 3}
            y={gridSize - SHAPE_HEIGHT.BLUE_RECT / 2}
            width={gridSize * 8}
          >
            <use href="#groupBlue" />
          </pattern>
        </defs>
        <rect
          fill="url(#patternGrid)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
        <rect
          fill="url(#patternCirle)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
        <rect
          fill="url(#patternYellow)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
        <rect
          fill="url(#patternBlue)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
        <rect
          fill="url(#patternBlueDot)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
        <rect
          fill="url(#patternPinkDot)"
          height={height}
          width="100vw"
          x="0"
          y="0"
        />
      </svg>
    </Fragment>
  );
};
