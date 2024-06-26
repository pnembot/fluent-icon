import type { SVGProps } from "react";

export function SmartwatchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 2a2 2 0 0 0-2 2v.17c.313-.11.65-.17 1-.17h6c.35 0 .687.06 1 .17V4a2 2 0 0 0-2-2H8ZM7 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1V7a2 2 0 0 0-2-2H7Zm0 11c-.35 0-.687-.06-1-.17V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H7Z"
      />
    </svg>
  );
}
export default SmartwatchFilled;
