import type { SVGProps } from "react";

export function ShareScreenPersonOverlayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.341a3 3 0 1 0-4.727 3.67A2.5 2.5 0 0 0 11.05 16H5a3 3 0 0 1-3-3V7Zm2 0v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Zm13.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default ShareScreenPersonOverlayFilled;
