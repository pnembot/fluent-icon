import type { SVGProps } from "react";

export function SimFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5a3 3 0 0 1 3-3h3.464a3 3 0 0 1 2.122.879l2.535 2.535A3 3 0 0 1 16 7.536V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Zm3 5.5v.5h3V9H8.5A1.5 1.5 0 0 0 7 10.5ZM7 12v1.5A1.5 1.5 0 0 0 8.5 15H10v-3H7Zm4.5 3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 9H11v6h.5Z"
      />
    </svg>
  );
}
export default SimFilled;
