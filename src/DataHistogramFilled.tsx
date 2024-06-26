import type { SVGProps } from "react";

export function DataHistogramFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 4.5A1.5 1.5 0 0 0 10.5 3h-1A1.5 1.5 0 0 0 8 4.5V17h4V4.5ZM13 6v11h3.5a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2h-2ZM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default DataHistogramFilled;
