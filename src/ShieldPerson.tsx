import type { SVGProps } from "react";

export function ShieldPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 9.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5H8A1.5 1.5 0 0 0 6.5 12c0 1.25 1 2.5 3.5 2.5Zm.277-12.416a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0C14.693 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421ZM4 5.428a15.969 15.969 0 0 0 5.6-2.082l.4-.249l.4.249A15.969 15.969 0 0 0 16 5.428V9.5c0 3.392-1.968 5.863-6 7.463c-4.032-1.6-6-4.071-6-7.463V5.428Z"
      />
    </svg>
  );
}
export default ShieldPerson;
