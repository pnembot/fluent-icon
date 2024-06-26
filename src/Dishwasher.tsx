import type { SVGProps } from "react";

export function Dishwasher(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v2h13v6a2 2 0 0 1-2 2H6v.085c.426.151.764.489.915.915H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 3v1H4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Zm-8.5-.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.5 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM2.5 9a.5.5 0 0 0-.5.5v2a2.5 2.5 0 0 0 2 2.45V17h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5v-3.05a2.5 2.5 0 0 0 2-2.45v-2a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default Dishwasher;
