import type { SVGProps } from "react";

export function DualScreenSpanFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 16h-5.5v-5.5h3.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L14.293 9.5H10.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM9.5 9.5V4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5v-5.5H5.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L5.707 9.5H9.5Z"
      />
    </svg>
  );
}
export default DualScreenSpanFilled;
