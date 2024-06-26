import type { SVGProps } from "react";

export function FlipHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M17.878 15.66a.75.75 0 0 1-.628.34h-5.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.437-.302l5.5 12.5a.75.75 0 0 1-.059.712ZM12.5 6.317V14.5h3.6l-3.6-8.183ZM2.5 16a.5.5 0 0 1-.454-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5h-6Z"
      />
    </svg>
  );
}
export default FlipHorizontalFilled;
