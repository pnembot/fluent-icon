import type { SVGProps } from "react";

export function ExpandUpLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 4a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2v-2.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.5a.5.5 0 0 0 0 1H14Zm-5-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.707l4.146 4.147a.5.5 0 1 0 .708-.708L4.707 4H8.5a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default ExpandUpLeftFilled;
