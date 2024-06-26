import type { SVGProps } from "react";

export function DataAreaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 2.489A.5.5 0 0 0 2 2.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 1 0 0-1H3V2.489ZM16 16V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.45-.023L4 8.286V16h12Z"
      />
    </svg>
  );
}
export default DataAreaFilled;
