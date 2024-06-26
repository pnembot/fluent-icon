import type { SVGProps } from "react";

export function LockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3zm0 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM10 4a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default LockFilled;
