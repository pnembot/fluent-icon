import type { SVGProps } from "react";

export function Mic(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 13a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm0-1a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2ZM5 9.5a.5.5 0 0 1 .5.5a4.5 4.5 0 1 0 9 0a.5.5 0 0 1 1 0a5.5 5.5 0 0 1-5 5.478V17.5a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 4.5 10a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default Mic;
