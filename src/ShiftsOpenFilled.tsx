import type { SVGProps } from "react";

export function ShiftsOpenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 0 0 0-1.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H7.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5Zm8-2.75a.75.75 0 0 0 0 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 0 0 0 1.5h1.75A2.75 2.75 0 0 0 17 14.25v-8.5A2.75 2.75 0 0 0 14.25 3H12.5Zm-2 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H10.5V5.75Z"
      />
    </svg>
  );
}
export default ShiftsOpenFilled;
