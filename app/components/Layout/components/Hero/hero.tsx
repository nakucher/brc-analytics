import { Fragment } from "react";

export const Hero = (): JSX.Element => {
  return (
    <Fragment>
      <svg
        fill="none"
        // height="100%"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 297 297"
        // width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="297"
            id="gridPattern"
            patternUnits="userSpaceOnUse"
            width="297"
          >
            <g opacity="0.5">
              <rect
                fill="none"
                height="297"
                stroke="black"
                strokeWidth="1"
                // stroke="#E1E3E5"
                width="297"
                x="0"
                y="0"
              />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="297" height="297" fill="url(#gridPattern)" />
      </svg>
    </Fragment>
  );
};
