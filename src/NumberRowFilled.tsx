import type { SVGProps } from "react";

export function NumberRowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1 3.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM13 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm.5 3h2a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H14V13h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5H15V7h-1.5a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default NumberRowFilled;
