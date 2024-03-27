import type { SVGProps } from "react";

export function DividerTall(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 1a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-1 0v-17a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DividerTall;
