import type { SVGProps } from "react";

export function GanttChart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-8-7A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5A1.5 1.5 0 0 1 4.5 5H7v1h1V5h4v3h1V5h2.5A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5H13v-2h-1v2H8V9H7v6H4.5A1.5 1.5 0 0 1 3 13.5v-7Z"
      />
    </svg>
  );
}
export default GanttChart;
