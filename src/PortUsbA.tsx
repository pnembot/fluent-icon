import type { SVGProps } from "react";

export function PortUsbA(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 7A1.5 1.5 0 0 0 3 8.5v3A1.5 1.5 0 0 0 4.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 15.5 7h-11ZM4 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V10H4V8.5Z"
      />
    </svg>
  );
}
export default PortUsbA;
