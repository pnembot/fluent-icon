import type { SVGProps } from "react";

export function EqualCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 9a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Zm4.5-2a8 8 0 1 0-16 0a8 8 0 0 0 16 0Zm-8-7a7 7 0 1 1 0 14a7 7 0 0 1 0-14Z"
      />
    </svg>
  );
}
export default EqualCircle;
