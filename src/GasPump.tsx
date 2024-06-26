import type { SVGProps } from "react";

export function GasPump(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4.5V17h8V4.5A1.5 1.5 0 0 0 11.5 3h-5A1.5 1.5 0 0 0 5 4.5Zm9 11V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.167a1.5 1.5 0 0 0-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.467c.325.432.5.959.5 1.5V13.5a2.5 2.5 0 0 1-4 2Zm-8-11v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM7 5h4v3H7V5Z"
      />
    </svg>
  );
}
export default GasPump;
