import type { SVGProps } from "react";

export function ChannelSubtract(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.198 4.523a2.016 2.016 0 0 1 1.065.128A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v3.707c.349.099.683.23 1 .393V5.5A2.5 2.5 0 0 0 14.5 3h-9a2.5 2.5 0 0 0-2.302 1.523ZM9.6 17a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V8.437a2.004 2.004 0 0 1-1 0V14.5A2.5 2.5 0 0 0 5.5 17h4.1Zm0-5c.183-.358.404-.693.657-1H7.5a.5.5 0 0 0 0 1h2.1ZM3 5.634a.995.995 0 0 1 1 0a1 1 0 1 1-1 0ZM7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default ChannelSubtract;
