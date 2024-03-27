import type { SVGProps } from "react";

export function ShiftsDayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm3.41 2.04a1.82 1.82 0 0 0-.352.506l-.028.07a.5.5 0 0 0 .938.346l.002-.005a.82.82 0 0 1 .152-.215c.113-.115.307-.246.648-.246c.394 0 .645.23.747.545a.93.93 0 0 1-.234.963a4.577 4.577 0 0 1-.582.431l-.041.027c-.218.145-.47.313-.702.51C6.441 10.912 6 11.525 6 12.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H7.068c.097-.323.292-.557.539-.767a6.49 6.49 0 0 1 .62-.447l.027-.018c.23-.152.49-.327.711-.533c.58-.542.715-1.345.503-2.001c-.217-.674-.816-1.238-1.698-1.238c-.644 0-1.085.264-1.36.544ZM11.5 7a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5H13v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v2h-1v-2a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default ShiftsDayFilled;
