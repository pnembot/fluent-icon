import type { SVGProps } from "react";

export function Timer2Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707L15.156 3.93Zm1.29 6.2A3.5 3.5 0 0 0 12 13.5a1.5 1.5 0 0 0 1.105 1.448A3.49 3.49 0 0 0 12 17.5v.04a7 7 0 1 1 4.446-7.41ZM9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v5Zm6.5-.5a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 1.5 1.5a2.5 2.5 0 0 0-2.5 2.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14v-.5a1.5 1.5 0 0 1 1.5-1.5a2.5 2.5 0 0 0 0-5Z"
      />
    </svg>
  );
}
export default Timer2Filled;
