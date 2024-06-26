import type { SVGProps } from "react";

export function Cast(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13Zm1.999 8.25a.75.75 0 1 1-1.499 0a.75.75 0 0 1 1.499 0ZM3.997 10.5a.5.5 0 0 1 .5-.5A3.502 3.502 0 0 1 8 13.502a.5.5 0 1 1-1 0A2.503 2.503 0 0 0 4.497 11a.5.5 0 0 1-.5-.5Zm0-2.5a.5.5 0 0 1 .5-.5a6.003 6.003 0 0 1 6.003 6.003a.5.5 0 0 1-1 0A5.003 5.003 0 0 0 4.497 8.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default Cast;
