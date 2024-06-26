import type { SVGProps } from "react";

export function SendCopyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.47 2.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L9.75 4.56v6.69a.75.75 0 0 1-1.5 0V4.56L7.03 5.78a.75.75 0 0 1-1.06-1.06l2.5-2.5ZM5.568 16.5A2 2 0 0 0 7.505 18h5.5a4.5 4.5 0 0 0 4.5-4.5v-2.25a.75.75 0 0 0-1.5 0v2.25a3 3 0 0 1-3 3H5.568ZM4.5 8.75a.75.75 0 0 0-1.5 0v4.75a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0v4.75a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.75Z"
      />
    </svg>
  );
}
export default SendCopyFilled;
