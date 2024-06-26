import type { SVGProps } from "react";

export function DualScreen(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm5.5 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5Zm1 10H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10Z"
      />
    </svg>
  );
}
export default DualScreen;
