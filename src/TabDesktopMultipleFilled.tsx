import type { SVGProps } from "react";

export function TabDesktopMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A2.5 2.5 0 0 1 4.5 2H6v2.5A1.5 1.5 0 0 0 7.5 6H15v6.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 12.5v-8Zm5 0V2h5.5A2.5 2.5 0 0 1 15 4.5V5H7.5a.5.5 0 0 1-.5-.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h7.45a3.5 3.5 0 0 0 3.5-3.5V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z"
      />
    </svg>
  );
}
export default TabDesktopMultipleFilled;
