import type { SVGProps } from "react";

export function WindowApps(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v-1H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2H4Zm10.75 2A1.75 1.75 0 0 0 13 9.75V13H9.75A1.75 1.75 0 0 0 8 14.75v2.5c0 .966.784 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75A1.75 1.75 0 0 0 17.25 8h-2.5ZM18 16.5a1.5 1.5 0 0 1-1.5 1.5H14v-4h4v2.5Zm-4-6.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V13h-4V9.75ZM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default WindowApps;
