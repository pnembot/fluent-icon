import type { SVGProps } from "react";

export function Sim(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 13.5v-3A1.5 1.5 0 0 1 8.5 9ZM8 10.5v.5h2v-1H8.5a.5.5 0 0 0-.5.5ZM8 12v1.5a.5.5 0 0 0 .5.5H10v-2H8Zm3.5 2a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H11v4h.5ZM7 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7.536a3 3 0 0 0-.879-2.122L12.586 2.88A3 3 0 0 0 10.464 2H7ZM5 5a2 2 0 0 1 2-2h3.464a2 2 0 0 1 1.415.586l2.535 2.535A2 2 0 0 1 15 7.536V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Z"
      />
    </svg>
  );
}
export default Sim;
