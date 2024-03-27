import type { SVGProps } from "react";

export function TabDesktopBottomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.503 17a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5h-9a2.5 2.5 0 0 0-2.5 2.5V13h7.5a1.5 1.5 0 0 1 1.5 1.5V17h2.5Zm-3.5 0v-2.5a.5.5 0 0 0-.5-.5h-7.5v.5a2.5 2.5 0 0 0 2.5 2.5h5.5Z"
      />
    </svg>
  );
}
export default TabDesktopBottomFilled;
