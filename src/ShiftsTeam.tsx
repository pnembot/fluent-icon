import type { SVGProps } from "react";

export function ShiftsTeam(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H10V6.5ZM6 3a3 3 0 0 0-3 3v4.104a2.753 2.753 0 0 1 1-.093V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.092c.06.2.092.41.092.625a2.8 2.8 0 0 1-.025.375H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM3.75 14.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM4 19c2.143 0 3-1.098 3-2.188c0-.724-.576-1.312-1.286-1.312H2.286c-.71 0-1.286.588-1.286 1.313C1 17.905 1.857 19 4 19Zm3.5-.5h-.023A2.945 2.945 0 0 0 8 16.812c0-.483-.148-.937-.404-1.312H8.93c.592 0 1.071.504 1.071 1.125c0 .934-.714 1.875-2.5 1.875Zm.25-4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default ShiftsTeam;
