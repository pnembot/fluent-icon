import type { SVGProps } from "react";

export function LayerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM3.07 9.65l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"
      />
    </svg>
  );
}
export default LayerFilled;
