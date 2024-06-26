import type { SVGProps } from "react";

export function BriefcaseOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 5.208L2.147 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.951-1.952c-.22.064-.454.098-.695.098h-9A2.5 2.5 0 0 1 3 13.5v-6a2.5 2.5 0 0 1 1.5-2.292ZM14.294 15l-3.325-3.325A.5.5 0 0 1 10.5 12h-1a.5.5 0 0 1-.5-.5V11H5.5a2.49 2.49 0 0 1-1.5-.5v3A1.5 1.5 0 0 0 5.5 15h8.793ZM9 9.707L5.305 6.013A1.5 1.5 0 0 0 4 7.5v1A1.5 1.5 0 0 0 5.5 10H9v-.293Zm5.5.293h-2.379l1 1H14.5a2.49 2.49 0 0 0 1.5-.5v3c0 .117-.013.23-.039.34l.777.776A2.49 2.49 0 0 0 17 13.5v-6A2.5 2.5 0 0 0 14.5 5H13V3.75A1.75 1.75 0 0 0 11.25 2h-2.5A1.75 1.75 0 0 0 7 3.75v1.129L8.121 6H14.5A1.5 1.5 0 0 1 16 7.5v1a1.5 1.5 0 0 1-1.5 1.5ZM8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 .75.75V5H8V3.75Z"
      />
    </svg>
  );
}
export default BriefcaseOff;
