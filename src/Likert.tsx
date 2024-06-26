import type { SVGProps } from "react";

export function Likert(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM8.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm2.25 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm2.25 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v2.5h3V5H5Zm1 5.5H3V13a2 2 0 0 0 2 2h1v-4.5Zm1 0V15h8a2 2 0 0 0 2-2v-2.5H7Zm10-1V7a2 2 0 0 0-2-2H7v4.5h10Z"
      />
    </svg>
  );
}
export default Likert;
