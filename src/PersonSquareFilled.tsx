import type { SVGProps } from "react";

export function PersonSquareFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm7-1a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm2.5 5h-5A1.5 1.5 0 0 0 6 11.5c0 1.116.459 2.01 1.212 2.615C7.953 14.71 8.947 15 10 15c1.053 0 2.047-.29 2.788-.885C13.54 13.51 14 12.616 14 11.5a1.5 1.5 0 0 0-1.5-1.5Z"
      />
    </svg>
  );
}
export default PersonSquareFilled;
