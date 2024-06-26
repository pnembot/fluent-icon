import type { SVGProps } from "react";

export function ShareScreenPersonOverlayInsideFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm10 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM12 10a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1h-3Z"
      />
    </svg>
  );
}
export default ShareScreenPersonOverlayInsideFilled;
