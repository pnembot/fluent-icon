import type { SVGProps } from "react";

export function DustFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm2.34 2.652A4.001 4.001 0 1 1 14.646 10a4 4 0 1 1-6.556 3.85a4 4 0 1 1 0-7.699ZM5.75 18a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
export default DustFilled;
