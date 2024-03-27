import type { SVGProps } from "react";

export function DiagramFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.825l.886-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.033a2.5 2.5 0 0 1 1 .4V5a3 3 0 0 0-3-3H5Zm.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM5 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM6.5 11a.5.5 0 0 0-.374.832L8.941 15l-2.815 3.168A.5.5 0 0 0 6.5 19h8.095a1.5 1.5 0 0 0 1.044-.423l3.134-3.039a.75.75 0 0 0 0-1.077l-3.134-3.038A1.5 1.5 0 0 0 14.595 11H6.5Z"
      />
    </svg>
  );
}
export default DiagramFilled;
