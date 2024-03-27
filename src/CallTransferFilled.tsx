import type { SVGProps } from "react";

export function CallTransferFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.551 2.442c.854-.478 1.943-.59 2.984-.326c.507.128.94.457 1.2.91l.972 1.695a2.5 2.5 0 0 1-.663 3.24l-.601.453c-.283.213-.4.515-.342.77c.183.813.587 1.566 1.152 2.122c.169.165.465.222.788.099l.666-.255a2.5 2.5 0 0 1 3.074 1.114l.954 1.702c.263.47.306 1.031.12 1.536c-.371 1.003-1.086 1.812-1.965 2.217c-.893.411-1.938.394-2.884-.237c-1.498-.998-3.303-2.678-4.938-5.48c-1.656-2.84-2.073-5.257-2.026-7.059c.03-1.153.64-2.015 1.509-2.501ZM12 8.499a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM14 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm3 1a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-2.147 2.147a.5.5 0 0 0 .708.707L17 3.706V7.5Z"
      />
    </svg>
  );
}
export default CallTransferFilled;
