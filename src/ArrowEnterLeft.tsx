import type { SVGProps } from "react";

export function ArrowEnterLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m3.76 12l3.333 3.136a.5.5 0 0 1-.686.728l-4.25-4a.5.5 0 0 1 0-.728l4.25-4a.5.5 0 1 1 .686.728L3.76 11H15a2 2 0 0 0 2-2V4.5a.5.5 0 0 1 1 0V9a3 3 0 0 1-3 3H3.76Z"
      />
    </svg>
  );
}
export default ArrowEnterLeft;
