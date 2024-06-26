import type { SVGProps } from "react";

export function Board(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v1.058l5.5-.053V4H6Zm4.5 0v8H16V6a2 2 0 0 0-2-2h-3.5Zm5.5 9h-5.5v3H14a2 2 0 0 0 2-2v-1Zm-6.5 3V8.005L4 8.058V14a2 2 0 0 0 2 2h3.5Z"
      />
    </svg>
  );
}
export default Board;
