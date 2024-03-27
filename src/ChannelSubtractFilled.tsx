import type { SVGProps } from "react";

export function ChannelSubtractFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.198 4.523A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.47 5.47 0 0 0-2.5-.6a5.489 5.489 0 0 0-4.243 2H7.5a.5.5 0 0 0 0 1h2.1c-.384.75-.6 1.6-.6 2.5c0 .9.216 1.75.6 2.5H5.5A2.5 2.5 0 0 1 3 14.5V8.437A2.004 2.004 0 0 0 5.5 6.5a2 2 0 0 0-2.302-1.977ZM7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM3 5.634a1 1 0 1 1 1 1.732a1 1 0 0 1-1-1.732ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default ChannelSubtractFilled;
