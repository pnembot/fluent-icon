import type { SVGProps } from "react";

export function DataWaterfall(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1 3.5a.5.5 0 0 1 .5-.5H7a2 2 0 0 1 2 2v4.5h6c1.035 0 2 .741 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.035 0-2-.741-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5ZM4 4v4.5a1 1 0 0 0 1 1h3V5a1 1 0 0 0-1-1H4Zm12 12v-4.7c0-.377-.378-.8-1-.8h-3v4.7c0 .377.378.8 1 .8h3Z"
      />
    </svg>
  );
}
export default DataWaterfall;
