import type { SVGProps } from "react";

export function WindowArrowUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.753 3.003a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75H9.6a5.46 5.46 0 0 1-.51-1.5H5.753c-.69 0-1.25-.56-1.25-1.25V7h11v2.092a5.46 5.46 0 0 1 1.5.51v-3.85a2.75 2.75 0 0 0-2.75-2.75h-8.5ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm2.354-4.853a.5.5 0 1 1-.708.707L15 13.708V16.5a.5.5 0 0 1-1 0v-2.793l-1.146 1.147a.5.5 0 1 1-.708-.707l2-2a.5.5 0 0 1 .351-.147h.006a.498.498 0 0 1 .348.145l.003.002l2 2Z"
      />
    </svg>
  );
}
export default WindowArrowUpFilled;
