import type { SVGProps } from "react";

export function BoardHeartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 7V3H6a3 3 0 0 0-3 3v1h6.5Zm1.251 8.41l3.43 3.457a.448.448 0 0 0 .637 0l3.431-3.457a2.598 2.598 0 0 0 0-3.653a2.547 2.547 0 0 0-3.626 0l-.123.123l-.123-.123a2.55 2.55 0 0 0-3.84.243a2.6 2.6 0 0 0 .214 3.41ZM9.5 17v-1.584a3.606 3.606 0 0 1 0-3.665V8H3v6a3 3 0 0 0 3 3h3.5Zm5-6.426a3.55 3.55 0 0 1 2.5-.53V6a3 3 0 0 0-3-3h-3.5v7.661a3.552 3.552 0 0 1 4-.087Z"
      />
    </svg>
  );
}
export default BoardHeartFilled;
