import type { SVGProps } from "react";

export function SubGridFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 10.5v2A1.5 1.5 0 0 0 7.5 14h2v-3.5H6Zm0-1v-2A1.5 1.5 0 0 1 7.5 6h2v3.5H6ZM10.5 6v3.5H14v-2A1.5 1.5 0 0 0 12.5 6h-2Zm3.5 4.5h-3.5V14h2a1.5 1.5 0 0 0 1.5-1.5v-2ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-2 7.5h2v-1H4V6a2 2 0 0 1 2-2h3.5v2h1V4H14a2 2 0 0 1 2 2v3.5h-2v1h2V14a2 2 0 0 1-2 2h-3.5v-2h-1v2H6a2 2 0 0 1-2-2v-3.5Z"
      />
    </svg>
  );
}
export default SubGridFilled;
