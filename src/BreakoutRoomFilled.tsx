import type { SVGProps } from "react";

export function BreakoutRoomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.354A3.99 3.99 0 0 0 12 14v-2a4 4 0 0 0-4-4H6a3.99 3.99 0 0 0-3 1.354V6Zm3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6Z"
      />
    </svg>
  );
}
export default BreakoutRoomFilled;
