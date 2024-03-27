import type { SVGProps } from "react";

export function BracesVariable(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v2.882c0 .493-.277.943-.715 1.167a.5.5 0 0 0 0 .902c.438.223.715.674.715 1.167V14.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5v-2.882c0-.615-.244-1.193-.662-1.618A2.309 2.309 0 0 0 4 8.382V5.5A1.5 1.5 0 0 1 5.5 4a.5.5 0 0 0 0-1Zm9 0A2.5 2.5 0 0 1 17 5.5v2.882c0 .493.277.943.715 1.167a.5.5 0 0 1 0 .902A1.31 1.31 0 0 0 17 11.618V14.5a2.5 2.5 0 0 1-2.5 2.5a.5.5 0 0 1 0-1a1.5 1.5 0 0 0 1.5-1.5v-2.882c0-.615.244-1.193.662-1.618A2.309 2.309 0 0 1 16 8.382V5.5A1.5 1.5 0 0 0 14.5 4a.5.5 0 0 1 0-1ZM7.907 6.21a.5.5 0 0 0-.814.58L9.386 10l-2.293 3.21a.5.5 0 0 0 .814.58L10 10.86l2.093 2.93a.5.5 0 0 0 .814-.58L10.614 10l2.293-3.21a.5.5 0 1 0-.814-.58L10 9.14L7.907 6.21Z"
      />
    </svg>
  );
}
export default BracesVariable;
