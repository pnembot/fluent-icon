import type { SVGProps } from "react";

export function ClockPause(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 1a8 8 0 1 1-.589 15.979a5.48 5.48 0 0 0 .383-.982a7 7 0 1 0-6.79-6.79a5.384 5.384 0 0 0-.983.382A8 8 0 0 1 11 1Zm-.5 3a.5.5 0 0 1 .492.41L11 4.5V9h2.5a.5.5 0 0 1 .09.992L13.5 10h-3a.5.5 0 0 1-.492-.41L10 9.5v-5a.5.5 0 0 1 .5-.5ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM4 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5Zm3 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
}
export default ClockPause;
