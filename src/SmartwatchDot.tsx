import type { SVGProps } from "react";

export function SmartwatchDot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm-2.993.685A1.995 1.995 0 0 0 12 2H8a2 2 0 0 0-2 2v1.268A2 2 0 0 0 5 7v6a2 2 0 0 0 1 1.732V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.268A2 2 0 0 0 15 13v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.337a3.508 3.508 0 0 1-1.001-.715L14 7v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6c.131 0 .257.025.372.071A3.486 3.486 0 0 1 13 4.5c0-.665.185-1.286.507-1.815ZM13 4.5V5H7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5ZM7 15h6v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1Z"
      />
    </svg>
  );
}
export default SmartwatchDot;
