import type { SVGProps } from "react";

export function RowTriple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5A1.5 1.5 0 0 1 4.5 2h11A1.5 1.5 0 0 1 17 3.5v1A1.5 1.5 0 0 1 15.5 6h-11A1.5 1.5 0 0 1 3 4.5v-1ZM4.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11ZM3 9.5A1.5 1.5 0 0 1 4.5 8h11A1.5 1.5 0 0 1 17 9.5v1a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 10.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11Zm0 5A1.5 1.5 0 0 0 3 15.5v1A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-11ZM4 15.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1Z"
      />
    </svg>
  );
}
export default RowTriple;
