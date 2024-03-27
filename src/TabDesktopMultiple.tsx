import type { SVGProps } from "react";

export function TabDesktopMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM14 4.5V5H7.5a.5.5 0 0 1-.5-.5V3h5.5A1.5 1.5 0 0 1 14 4.5Zm-8 0A1.5 1.5 0 0 0 7.5 6H14v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5v-8A1.5 1.5 0 0 1 4.5 3H6v1.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h1.035A1.5 1.5 0 0 0 7.5 17H14a3 3 0 0 0 3-3V7.5a1.5 1.5 0 0 0-1-1.415V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z"
      />
    </svg>
  );
}
export default TabDesktopMultiple;
