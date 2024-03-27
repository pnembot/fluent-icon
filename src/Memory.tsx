import type { SVGProps } from "react";

export function Memory(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M14.414 4.586A2 2 0 0 0 13 4V2.5a.5.5 0 0 0-1 0V4h-2V2.5a.5.5 0 1 0-1 0V4H7V2.5a.5.5 0 1 0-1 0V4H4V2.5a.5.5 0 1 0-1 0V4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12a2 2 0 0 0 2-2V6a2 2 0 0 0-.586-1.414ZM14 10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4Zm-1.5-4h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM12 9H4V7h8v2Z"
      />
    </svg>
  );
}
export default Memory;
