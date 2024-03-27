import type { SVGProps } from "react";

export function Person6Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-3 7c0-1.113.903-2 2.009-2h9.041A3.49 3.49 0 0 0 13 13.5v3c0 .37.058.728.165 1.064c-.961.294-2.04.436-3.165.436c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm12 .5a1.5 1.5 0 0 1 2.625-.992a.5.5 0 0 0 .75-.662A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default Person6Filled;
