import type { SVGProps } from "react";

export function BoxToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m17.421 4.992l-3.046 1.219l-7.5-3L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303a1.5 1.5 0 0 1 .364.208Zm-7.42 2.969l3.028-1.212l-7.5-3l-2.586 1.035a1.499 1.499 0 0 0-.364.208L10 7.961ZM2.034 5.852A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.1.04.2.075.303.105A2.542 2.542 0 0 1 9 17.5v-4c0-.563.186-1.083.5-1.5V8.837L2.035 5.852ZM18 6.176v4.873a2.82 2.82 0 0 0-.042-.008A2.5 2.5 0 0 0 15.5 9h-2a2.5 2.5 0 0 0-2.458 2.041c-.189.035-.37.092-.542.166v-2.37l7.465-2.985c.023.105.035.214.035.324ZM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z"
      />
    </svg>
  );
}
export default BoxToolboxFilled;
