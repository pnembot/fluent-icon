import type { SVGProps } from "react";

export function HeadsetFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a6 6 0 0 0-6 6v6a3 3 0 0 0 3 3h1.268A2 2 0 1 0 8 16H7a2 2 0 0 1-2-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a5 5 0 0 1 10 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a6 6 0 0 0-6-6Z"
      />
    </svg>
  );
}
export default HeadsetFilled;
