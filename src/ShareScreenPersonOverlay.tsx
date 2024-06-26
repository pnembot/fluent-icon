import type { SVGProps } from "react";

export function ShareScreenPersonOverlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v3.591a3.015 3.015 0 0 0-1-.94V6.75A1.75 1.75 0 0 0 15.25 5H4.75A1.75 1.75 0 0 0 3 6.75v6.5c0 .966.784 1.75 1.75 1.75h6.75a2.49 2.49 0 0 0-.45 1h-6.3A2.75 2.75 0 0 1 2 13.25v-6.5ZM15.5 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5ZM5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Z"
      />
    </svg>
  );
}
export default ShareScreenPersonOverlay;
