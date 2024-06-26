import type { SVGProps } from "react";

export function TabDesktopBottom(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.003 14.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5v-9a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9Zm-13-.5v.5a1.5 1.5 0 0 0 1.5 1.5h5.5v-1.5a.5.5 0 0 0-.5-.5h-6.5Zm8 2h2.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V13h6.5a1.5 1.5 0 0 1 1.5 1.5V16Z"
      />
    </svg>
  );
}
export default TabDesktopBottom;
