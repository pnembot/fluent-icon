import type { SVGProps } from "react";

export function DataArea(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 2.5a.5.5 0 1 0-1 0v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H16V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V2.5Zm0 7.325L6.972 8.06l3.28 1.874a.5.5 0 0 0 .56-.044L15 6.54V17H3V9.825Z"
      />
    </svg>
  );
}
export default DataArea;
