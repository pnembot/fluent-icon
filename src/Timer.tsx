import type { SVGProps } from "react";

export function Timer(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707L15.156 3.93ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm0 12a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-1a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
      />
    </svg>
  );
}
export default Timer;
