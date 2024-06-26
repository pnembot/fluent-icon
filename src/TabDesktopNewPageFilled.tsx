import type { SVGProps } from "react";

export function TabDesktopNewPageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3H8v2.5A1.5 1.5 0 0 0 9.5 7H17v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM8 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm3-5v-.5A2.5 2.5 0 0 0 14.5 3H9v2.5a.5.5 0 0 0 .5.5H17Z"
      />
    </svg>
  );
}
export default TabDesktopNewPageFilled;
