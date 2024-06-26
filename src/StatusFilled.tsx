import type { SVGProps } from "react";

export function StatusFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.354 2.647a2.621 2.621 0 0 0-3.707 0l-5.5 5.5a.5.5 0 0 0-.132.232l-1 4a.5.5 0 0 0 .606.606l4-1a.5.5 0 0 0 .233-.131l5.5-5.5a2.621 2.621 0 0 0 0-3.707Zm-1.41 6.53a6 6 0 1 1-5.121-5.121l.854-.854a7 7 0 1 0 5.121 5.121l-.854.854Z"
      />
    </svg>
  );
}
export default StatusFilled;
