import type { SVGProps } from "react";

export function GasPumpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 17V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.167a1.5 1.5 0 0 0-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.467c.325.432.5.959.5 1.5V13.5a2.5 2.5 0 0 1-4 2V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4ZM6.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5Z"
      />
    </svg>
  );
}
export default GasPumpFilled;
