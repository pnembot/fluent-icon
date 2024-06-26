import type { SVGProps } from "react";

export function WindowHeaderHorizontalOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.496 2.496 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708l-15-15Zm12.293 13.708A1.494 1.494 0 0 1 14.5 16h-9A1.5 1.5 0 0 1 4 14.5V7h2.293l8.854 8.854ZM16 7v6.879l.975.975c.016-.116.025-.234.025-.354v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.238.008-.354.025L9.121 7H16Z"
      />
    </svg>
  );
}
export default WindowHeaderHorizontalOff;
