import type { SVGProps } from "react";

export function Headset(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 8a6 6 0 1 1 12 0v3a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1a2 2 0 0 0 2 2h1a2 2 0 1 1 .268 1H7a3 3 0 0 1-3-3V8Zm11 1h-2v3h1a1 1 0 0 0 1-1V9ZM5 12h2V9H5v3Zm4 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default Headset;
