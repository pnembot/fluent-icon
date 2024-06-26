import type { SVGProps } from "react";

export function ChannelArrowLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4.5c-.103 0-.203.008-.302.023A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V5.5A1.5 1.5 0 0 0 14.5 4h-9c-.513 0-.966.258-1.237.65A1.994 1.994 0 0 0 3.5 4.5ZM9.207 16c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5V8.437a2.004 2.004 0 0 0 1 0V14.5A1.5 1.5 0 0 0 5.5 16h3.707Zm.393-4c.183-.358.404-.693.657-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-6.853-.354l-.003.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default ChannelArrowLeft;
