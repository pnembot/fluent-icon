import type { SVGProps } from "react";

export function Calculator(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-4-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7.5 4A1.5 1.5 0 0 0 6 5.5v1A1.5 1.5 0 0 0 7.5 8h5A1.5 1.5 0 0 0 14 6.5v-1A1.5 1.5 0 0 0 12.5 4h-5ZM7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1Zm9 10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v11Zm-1-11A1.5 1.5 0 0 0 13.5 3h-7A1.5 1.5 0 0 0 5 4.5v11A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-11Z"
      />
    </svg>
  );
}
export default Calculator;
