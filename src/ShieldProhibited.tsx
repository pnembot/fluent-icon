import type { SVGProps } from "react";

export function ShieldProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0l.072-.028a5.528 5.528 0 0 1-1.386-1.475C5.6 14.867 4 12.557 4 9.5V5.428a15.969 15.969 0 0 0 5.6-2.082l.4-.249l.4.249A15.969 15.969 0 0 0 16 5.428V8.6c.358.183.693.404 1 .657V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421Zm.42 13.512l4.899-4.9a3.5 3.5 0 0 0-4.9 4.9Zm.707.707a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9ZM13.5 18a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Z"
      />
    </svg>
  );
}
export default ShieldProhibited;
