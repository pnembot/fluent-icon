import type { SVGProps } from "react";

export function ShieldPersonAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0l.038-.015a5.503 5.503 0 0 1-.74-1.206C5.798 15.143 4 12.742 4 9.5V5.428a15.969 15.969 0 0 0 5.6-2.082l.4-.249l.4.249A15.969 15.969 0 0 0 16 5.428v3.779c.349.099.683.23 1 .392V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421Zm-1.276 12.34a5.484 5.484 0 0 1 1.725-3.925H8A1.5 1.5 0 0 0 6.5 12c0 1.068.73 2.136 2.5 2.425ZM12 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ShieldPersonAdd;
