import type { SVGProps } from "react";

export function WalkieTalkie(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M7.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5ZM8 9V7h4v2H8Zm0 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
        <path d="M8 1.5a.5.5 0 0 0-1 0V3H5.5A1.5 1.5 0 0 0 4 4.5v7a.5.5 0 0 0 .084.277L6 14.651V16.5A1.5 1.5 0 0 0 7.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-1.849l1.916-2.874A.5.5 0 0 0 16 11.5v-7A1.5 1.5 0 0 0 14.5 3H8V1.5ZM5.5 4h9a.5.5 0 0 1 .5.5v6.849l-1.916 2.874A.5.5 0 0 0 13 14.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.084-.277L5 11.349V4.5a.5.5 0 0 1 .5-.5Z" />
      </g>
    </svg>
  );
}
export default WalkieTalkie;
