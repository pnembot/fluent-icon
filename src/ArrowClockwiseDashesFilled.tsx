import type { SVGProps } from "react";

export function ArrowClockwiseDashesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.44 2.152a8.035 8.035 0 0 1 3.12 0a.75.75 0 0 1-.29 1.472a6.536 6.536 0 0 0-2.54 0a.75.75 0 0 1-.29-1.472Zm4.965 1.402a.75.75 0 0 1 1.04-.206A8.04 8.04 0 0 1 16 4.708V2.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h2.374a6.541 6.541 0 0 0-1.513-1.406a.75.75 0 0 1-.206-1.04Zm-7.016 1.04a.75.75 0 0 0-.834-1.246a8.04 8.04 0 0 0-2.207 2.207a.75.75 0 0 0 1.246.834A6.54 6.54 0 0 1 6.39 4.594ZM3.034 7.85a.75.75 0 0 1 .59.882a6.535 6.535 0 0 0 0 2.538a.75.75 0 0 1-1.472.291a8.035 8.035 0 0 1 0-3.12a.75.75 0 0 1 .882-.59ZM18 10v-.25a.75.75 0 0 0-1.5 0V10c0 .435-.043.86-.124 1.27a.75.75 0 1 0 1.472.29c.1-.505.152-1.027.152-1.56ZM3.554 13.405a.75.75 0 0 1 1.04.206a6.54 6.54 0 0 0 1.795 1.795a.75.75 0 0 1-.834 1.246a8.042 8.042 0 0 1-2.207-2.207a.75.75 0 0 1 .206-1.04Zm13.098 1.04a.75.75 0 0 0-1.246-.834a6.54 6.54 0 0 1-1.795 1.795a.75.75 0 0 0 .834 1.246a8.043 8.043 0 0 0 2.207-2.207ZM7.85 16.966a.75.75 0 0 1 .882-.59a6.535 6.535 0 0 0 2.538 0a.75.75 0 1 1 .291 1.472a8.033 8.033 0 0 1-3.12 0a.75.75 0 0 1-.59-.881Z"
      />
    </svg>
  );
}
export default ArrowClockwiseDashesFilled;
