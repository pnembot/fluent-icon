import type { SVGProps } from "react";

export function Diagram(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.825l.886-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.033a2.5 2.5 0 0 1 1 .4V5a3 3 0 0 0-3-3H5Zm1.5 9a.5.5 0 0 0-.374.832L8.941 15l-2.815 3.168A.5.5 0 0 0 6.5 19h8.095a1.5 1.5 0 0 0 1.044-.423l3.134-3.039a.75.75 0 0 0 0-1.077l-3.134-3.038A1.5 1.5 0 0 0 14.595 11H6.5Zm3.336 3.502L7.613 12h6.982a.5.5 0 0 1 .348.141L17.892 15l-2.95 2.859a.5.5 0 0 1-.347.141H7.613l2.223-2.502a.75.75 0 0 0 0-.996ZM5 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5.5 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default Diagram;
