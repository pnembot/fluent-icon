import type { SVGProps } from "react";

export function LikertFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 16v-5.5H2V13a3 3 0 0 0 3 3h1Zm1 0h8a3 3 0 0 0 3-3v-2.5H7V16Zm2-2a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5ZM18 9.5V7a3 3 0 0 0-3-3H7v5.5h11ZM9.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6 4H5a3 3 0 0 0-3 3v2.5h4V4Z"
      />
    </svg>
  );
}
export default LikertFilled;
