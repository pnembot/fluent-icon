import type { SVGProps } from "react";

export function WalkieTalkieFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        <path d="M8 7v2h4V7H8Z" />
        <path d="M7.5 1a.5.5 0 0 1 .5.5V3h6.5A1.5 1.5 0 0 1 16 4.5v7a.5.5 0 0 1-.084.277L14 14.651V16.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-1.849l-1.916-2.874A.5.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3H7V1.5a.5.5 0 0 1 .5-.5ZM7 6.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Zm1 6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z" />
      </g>
    </svg>
  );
}
export default WalkieTalkieFilled;
