import type { SVGProps } from "react";

export function GroupList(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H3V4h1.5a.5.5 0 0 0 0-1h-2Zm0 8a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H3v-4h1.5a.5.5 0 0 0 0-1h-2ZM6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM6 7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z"
      />
    </svg>
  );
}
export default GroupList;
