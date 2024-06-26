import type { SVGProps } from "react";

export function SelectObjectSkew(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.487 6h.013a1.5 1.5 0 1 0-1.415-2l-.006.019a1.498 1.498 0 0 0 .474 1.644c.255.208.58.334.934.337Zm-5.402 10a1.5 1.5 0 1 0 1.428-2H12.5a1.5 1.5 0 0 0-1.415 1l-.006.019a1.498 1.498 0 0 0 .006.981ZM3.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM7.487 6a1.5 1.5 0 1 0 .026-2.998A1.5 1.5 0 0 0 7.487 6Zm-3.62 7.027L6.193 6.63c.281.173.6.292.94.342l-2.326 6.395a2.485 2.485 0 0 0-.94-.341ZM14.05 5h-4.1a2.512 2.512 0 0 0 0-1h4.1a2.511 2.511 0 0 0 0 1Zm-8.1 11h4.1a2.512 2.512 0 0 1 0-1h-4.1a2.512 2.512 0 0 1 0 1Zm6.917-2.973l2.326-6.396c.281.173.6.292.94.342l-2.326 6.395a2.485 2.485 0 0 0-.94-.341Z"
      />
    </svg>
  );
}
export default SelectObjectSkew;
