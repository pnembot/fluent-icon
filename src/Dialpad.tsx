import type { SVGProps } from "react";

export function Dialpad(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default Dialpad;
