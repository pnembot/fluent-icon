import type { SVGProps } from "react";

export function XboxConsole(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM4 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15Zm4 7V17h7V3H5v14h2V9.5a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default XboxConsole;
