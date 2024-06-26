import type { SVGProps } from "react";

export function DataScatterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H3V2.5ZM7.5 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM17 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM12.5 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
}
export default DataScatterFilled;
