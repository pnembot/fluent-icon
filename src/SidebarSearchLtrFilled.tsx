import type { SVGProps } from "react";

export function SidebarSearchLtrFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.585a1.495 1.495 0 0 0-.354-.56l-2-2A4.5 4.5 0 0 0 3 8.758V5.5Zm10 1v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0Zm-4 6c0 .786-.26 1.512-.697 2.096l2.55 2.55a.5.5 0 0 1-.707.707l-2.55-2.55A3.5 3.5 0 1 1 9 12.5Zm-1 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
      />
    </svg>
  );
}
export default SidebarSearchLtrFilled;
