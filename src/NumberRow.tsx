import type { SVGProps } from "react";

export function NumberRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 6.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4ZM3 5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Zm10.5 1a.5.5 0 0 0 0 1H15v2.5h-1.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H14v-2.5h1.5a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5h-2ZM13 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm-1 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5Z"
      />
    </svg>
  );
}
export default NumberRow;
