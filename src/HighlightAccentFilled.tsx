import type { SVGProps } from "react";

export function HighlightAccentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 3v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3h13Zm-10 7.5v7l6.447-3.106a1 1 0 0 0 .553-.894v-3h-7Z"
      />
    </svg>
  );
}
export default HighlightAccentFilled;
