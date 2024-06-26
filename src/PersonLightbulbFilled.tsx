import type { SVGProps } from "react";

export function PersonLightbulbFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-3 7c0-1.113.903-2 2.009-2h6.526A3.982 3.982 0 0 0 11 13a3.99 3.99 0 0 0 1.386 3.027l.332 1.66c-.844.21-1.764.313-2.718.313c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm15 0a2.997 2.997 0 0 1-1.294 2.468L16.6 16h-3.2l-.107-.532A3 3 0 1 1 18 13Zm-4.4 4l.24 1.196a1 1 0 0 0 .98.804h.36a1 1 0 0 0 .98-.804L16.4 17h-2.8Z"
      />
    </svg>
  );
}
export default PersonLightbulbFilled;
