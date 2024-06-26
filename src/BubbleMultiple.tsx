import type { SVGProps } from "react";

export function BubbleMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM12 4.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0ZM3 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 7 5Zm5.499 12.999a3.502 3.502 0 0 1-3.325-2.405c.317-.123.621-.273.91-.446a2.501 2.501 0 1 0 2.573-3.144a5.95 5.95 0 0 0 .256-.98a3.5 3.5 0 0 1-.414 6.975ZM7.667 7.2a.5.5 0 1 0-.334.943c.71.251 1.274.814 1.525 1.524a.5.5 0 1 0 .942-.334A3.508 3.508 0 0 0 7.667 7.2Z"
      />
    </svg>
  );
}
export default BubbleMultiple;
