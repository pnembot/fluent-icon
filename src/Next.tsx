import type { SVGProps } from "react";

export function Next(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13ZM3 4.252c0-1 1.117-1.595 1.947-1.038l8.5 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752v-11.5Zm1.39-.207a.25.25 0 0 0-.39.207v11.5c0 .2.225.32.391.207l8.5-5.793a.25.25 0 0 0-.002-.414l-8.5-5.707Z"
      />
    </svg>
  );
}
export default Next;
