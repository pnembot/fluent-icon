import type { SVGProps } from "react";

export function StreamInput(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1h-.9l.997.998A2 2 0 0 0 7 10V9ZM.5 14a.5.5 0 0 0 0 1h3.684l-2.147 2.146a.5.5 0 0 0 .707.708l2.989-2.99a.499.499 0 0 0 0-.729l-2.989-2.989a.5.5 0 0 0-.707.708L4.184 14H.5Zm9.5-3.5a4.502 4.502 0 0 1-3.148 4.293a1.87 1.87 0 0 0-.122-1.015A3.501 3.501 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4A3.5 3.5 0 0 0 10 9.5v1ZM14 9a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"
      />
    </svg>
  );
}
export default StreamInput;
