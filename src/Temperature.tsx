import type { SVGProps } from "react";

export function Temperature(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5a.5.5 0 0 1 .5.5v5.063a2 2 0 1 1-1 0V7a.5.5 0 0 1 .5-.5ZM10 2a3 3 0 0 0-3 3v6.354a4 4 0 1 0 6 0V5a3 3 0 0 0-3-3Zm0 1a2 2 0 0 1 2 2v6.755l.143.145a3 3 0 1 1-4.286 0L8 11.755V5a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default Temperature;
