import type { SVGProps } from "react";

export function LineFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.78 2.22a.75.75 0 0 1 0 1.06l-14.5 14.5a.75.75 0 0 1-1.06-1.06l14.5-14.5a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
}
export default LineFilled;
