import type { SVGProps } from "react";

export function ShiftsTeamFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.025a2.8 2.8 0 0 0 .025-.375c0-.919-.586-1.752-1.447-2.028a2.25 2.25 0 0 0-3.313-3.015A2.75 2.75 0 0 0 3 10.103V6Zm7 .5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H10V6.5Zm-6.25 8a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM4 19c2.143 0 3-1.098 3-2.188c0-.724-.576-1.312-1.286-1.312H2.286c-.71 0-1.286.588-1.286 1.313C1 17.905 1.857 19 4 19Zm3.5-.5h-.023A2.945 2.945 0 0 0 8 16.812c0-.483-.148-.937-.404-1.312H8.93c.592 0 1.071.504 1.071 1.125c0 .934-.714 1.875-2.5 1.875Zm.25-4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default ShiftsTeamFilled;
