import type { SVGProps } from "react";

export function Timer10Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707L15.156 3.93Zm1.273 6.072a3.49 3.49 0 0 0-2.482 1.104a1.5 1.5 0 0 0-1.921-1.028l-1.5.5A1.5 1.5 0 0 0 11 13.5v4.339A7 7 0 1 1 16.43 10ZM9 10.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4Zm5 3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V18.5a.5.5 0 0 0 1 0v-7Z"
      />
    </svg>
  );
}
export default Timer10Filled;
