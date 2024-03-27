import type { SVGProps } from "react";

export function PersonLightning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM3 13c0-1.113.903-2 2.009-2h6.743l-.417 1H5.009C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17h1.97l-.219.877c-.563.082-1.15.123-1.751.123c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm9.612 3a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 17.85 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.06 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692h1.11Z"
      />
    </svg>
  );
}
export default PersonLightning;
