import type { SVGProps } from "react";

export function Video(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM13 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h7A1.5 1.5 0 0 1 13 6.5Z"
      />
    </svg>
  );
}
export default Video;
