import type { SVGProps } from "react";

export function LaserTool(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2.5a.5.5 0 0 0-1 0V5a2 2 0 0 0 1 1.732V7.5A1.5 1.5 0 0 0 5.5 9h4v3.5a.5.5 0 0 0 1 0V9h4A1.5 1.5 0 0 0 16 7.5v-.768A2 2 0 0 0 17 5V2.5a.5.5 0 0 0-1 0V5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2.5ZM5 7h10v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7Zm.5 7a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1H5.5Zm7 .5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5ZM10 15a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5Zm-1.146-.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 .708.708l1.5-1.5Zm2.292-.708a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0Z"
      />
    </svg>
  );
}
export default LaserTool;
