import type { SVGProps } from "react";

export function Games(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 9.5A5.5 5.5 0 0 1 7.5 4h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 2 9.5ZM7.5 5a4.5 4.5 0 0 0 0 9h5a4.5 4.5 0 1 0 0-9h-5Z"
      />
    </svg>
  );
}
export default Games;
