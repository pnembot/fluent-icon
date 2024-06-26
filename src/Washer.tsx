import type { SVGProps } from "react";

export function Washer(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 7a4 4 0 0 1 3.922 3.211l.025.013l-.016.031A4 4 0 1 1 10 7Zm-2.516 3.668c.668-.297 1.533-.43 2.637-.153c1.463.365 2.332-.064 2.726-.463a3.001 3.001 0 0 0-5.846.878a3.59 3.59 0 0 1 .483-.262ZM7.5 5.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
      />
    </svg>
  );
}
export default Washer;
