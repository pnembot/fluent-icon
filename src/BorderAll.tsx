import type { SVGProps } from "react";

export function BorderAll(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v3.5h5.5V4H6Zm4.5 0v5.5H16V6a2 2 0 0 0-2-2h-3.5Zm5.5 6.5h-5.5V16H14a2 2 0 0 0 2-2v-3.5ZM9.5 16v-5.5H4V14a2 2 0 0 0 2 2h3.5Z"
      />
    </svg>
  );
}
export default BorderAll;
