import type { SVGProps } from "react";

export function Storage(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 8.5A2.5 2.5 0 0 1 4.5 6h11A2.5 2.5 0 0 1 18 8.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 11.5v-3ZM4.5 7A1.5 1.5 0 0 0 3 8.5v3A1.5 1.5 0 0 0 4.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 15.5 7h-11Z"
      />
    </svg>
  );
}
export default Storage;
