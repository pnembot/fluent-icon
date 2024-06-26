import type { SVGProps } from "react";

export function PlayMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4.44 12.56a1.5 1.5 0 0 0 1.795.245l8-4.5a1.5 1.5 0 0 0 0-2.611l-8.01-4.506A1.52 1.52 0 0 0 4 2.5v9c0 .398.158.78.44 1.06Zm.706-10.414a.5.5 0 0 1 .599-.081l8 4.5a.5.5 0 0 1 0 .87l-7.99 4.494a.493.493 0 0 1-.755-.43v-9a.5.5 0 0 1 .146-.353Zm6.614 8.694l1.22-.68a1.511 1.511 0 0 1-.74 1.56l-5.08 2.86A3.617 3.617 0 0 1 5.5 15a3.081 3.081 0 0 1-.91-.13A3.331 3.331 0 0 1 3 13.94a3.464 3.464 0 0 1-1-2.44V5.91a1.483 1.483 0 0 1 1-1.39v6.98a2.513 2.513 0 0 0 3.7 2.19l5.05-2.84a.01.01 0 0 0 .01-.01Z"
      />
    </svg>
  );
}
export default PlayMultiple;
