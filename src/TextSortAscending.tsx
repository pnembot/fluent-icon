import type { SVGProps } from "react";

export function TextSortAscending(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.466 2.317a.5.5 0 0 0-.931 0l-2.75 7a.5.5 0 0 0 .93.366L4.378 8h3.247l.66 1.683a.5.5 0 0 0 .932-.366l-2.75-7ZM6 3.867L7.23 7H4.77L6 3.867ZM4 11a.5.5 0 0 0 0 1h3.066l-3.482 5.223A.5.5 0 0 0 4 18h4a.5.5 0 0 0 0-1H4.934l3.482-5.223A.5.5 0 0 0 8 11H4Zm10.5-9a.5.5 0 0 1 .5.5v13.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L14 16.293V2.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TextSortAscending;
