import type { SVGProps } from "react";

export function TabInPrivateFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3Zm-1 2.5v1.293L6.793 4.5H5.5a1 1 0 0 0-1 1Zm0 2.707v2.586L10.793 4.5H8.207L4.5 8.207ZM12.207 4.5L4.5 12.207V14.5c0 .09.012.176.034.26L14.759 4.533A1.001 1.001 0 0 0 14.5 4.5h-2.293Zm3.26.741L5.24 15.466a1 1 0 0 0 .259.034h2.293L15.5 7.793V5.5a1 1 0 0 0-.034-.259Zm.033 3.966L9.207 15.5h2.586l3.707-3.707V9.207Zm0 4L13.207 15.5H14.5a1 1 0 0 0 1-1v-1.293Z"
      />
    </svg>
  );
}
export default TabInPrivateFilled;
