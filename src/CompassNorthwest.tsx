import type { SVGProps } from "react";

export function CompassNorthwest(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM6.097 7.42c-.383-.84.482-1.706 1.324-1.323l3.262 1.482a3.5 3.5 0 0 1 1.738 1.738l1.482 3.262c.383.841-.483 1.707-1.324 1.324l-3.262-1.482a3.5 3.5 0 0 1-1.738-1.738L6.097 7.42Zm4.172 1.07L7.007 7.007l1.483 3.262a2.5 2.5 0 0 0 1.24 1.241l3.262 1.483l-1.483-3.262A2.5 2.5 0 0 0 10.27 8.49Z"
      />
    </svg>
  );
}
export default CompassNorthwest;
