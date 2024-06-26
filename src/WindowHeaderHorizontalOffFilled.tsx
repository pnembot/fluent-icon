import type { SVGProps } from "react";

export function WindowHeaderHorizontalOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.496 2.496 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708l-15-15Zm11.905 13.32a1 1 0 0 1-.259.034h-9a1 1 0 0 1-1-1V7h1.793l8.466 8.466ZM15.5 7v6.379l1.475 1.475c.016-.116.025-.234.025-.354v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.238.008-.354.025L9.121 7H15.5Z"
      />
    </svg>
  );
}
export default WindowHeaderHorizontalOffFilled;
