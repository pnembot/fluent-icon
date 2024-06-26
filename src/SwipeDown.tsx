import type { SVGProps } from "react";

export function SwipeDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 6a4.001 4.001 0 0 1-2.5 3.71V8.598a3 3 0 1 0-3 0v1.11A4.001 4.001 0 0 1 10 2a4 4 0 0 1 4 4ZM9.646 17.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.707L10.5 16.293V5.5a.5.5 0 0 0-1 0v10.793l-2.146-2.146a.5.5 0 1 0-.708.707l3 3Z"
      />
    </svg>
  );
}
export default SwipeDown;
