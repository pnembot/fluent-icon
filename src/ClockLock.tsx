import type { SVGProps } from "react";

export function ClockLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 1-1 15.938V16.93a7 7 0 1 0-5.973-7.543a3 3 0 0 0-1.02.945A8 8 0 0 1 10 2Zm-.5 3a.5.5 0 0 1 .492.41L10 5.5V10h2.5a.5.5 0 0 1 .09.992L12.5 11h-3a.5.5 0 0 1-.492-.41L9 10.5v-5a.5.5 0 0 1 .5-.5Zm-7 7v1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default ClockLock;
