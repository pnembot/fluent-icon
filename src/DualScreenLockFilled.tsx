import type { SVGProps } from "react";

export function DualScreenLockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3v1H14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5V3a2 2 0 1 0-4 0Zm1 1V3a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5ZM12 9V6h-1.5v12H16a2 2 0 0 0 2-2v-5h-4a2 2 0 0 1-2-2ZM4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V6H4Zm2 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DualScreenLockFilled;
