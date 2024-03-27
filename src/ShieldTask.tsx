import type { SVGProps } from "react";

export function ShieldTask(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.854 7.854a.5.5 0 0 0-.708-.708L9.5 10.793L7.854 9.146a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4Zm-3.577-5.77a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0C14.693 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421ZM4 5.428a15.969 15.969 0 0 0 5.6-2.082l.4-.249l.4.249A15.969 15.969 0 0 0 16 5.428V9.5c0 3.392-1.968 5.863-6 7.463c-4.032-1.6-6-4.07-6-7.463V5.428Z"
      />
    </svg>
  );
}
export default ShieldTask;
