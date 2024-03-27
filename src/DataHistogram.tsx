import type { SVGProps } from "react";

export function DataHistogram(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1ZM7 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2h2Zm0 7v-6H5a1 1 0 0 0-1 1v5h3Zm6 0h3V8a1 1 0 0 0-1-1h-2v9Z"
      />
    </svg>
  );
}
export default DataHistogram;
