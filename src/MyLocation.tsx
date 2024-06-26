import type { SVGProps } from "react";

export function MyLocation(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm.5-10.5a.5.5 0 0 0-1 0v1.52A6.001 6.001 0 0 0 4.02 9.5H2.5a.5.5 0 0 0 0 1h1.52a6.001 6.001 0 0 0 5.48 5.48v1.52a.5.5 0 0 0 1 0v-1.52a6.002 6.002 0 0 0 5.48-5.48h1.52a.5.5 0 0 0 0-1h-1.52a6.001 6.001 0 0 0-5.48-5.48V2.5ZM10 15a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"
      />
    </svg>
  );
}
export default MyLocation;
