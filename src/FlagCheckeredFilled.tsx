import type { SVGProps } from "react";

export function FlagCheckeredFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6v2.75a.75.75 0 0 1-1.5 0v-14ZM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6v3Z"
      />
    </svg>
  );
}
export default FlagCheckeredFilled;
