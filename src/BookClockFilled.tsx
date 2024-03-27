import type { SVGProps } from "react";

export function BookClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-.5-6a.5.5 0 0 1 .5.5V9h1a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default BookClockFilled;
