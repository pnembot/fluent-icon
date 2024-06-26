import type { SVGProps } from "react";

export function TextColor(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.464 2.314a.5.5 0 0 0-.928 0l-3 7.5a.5.5 0 1 0 .928.372l1.073-2.682h2.926l1.073 2.682a.5.5 0 1 0 .928-.372l-3-7.5ZM10 3.846l1.063 2.658H8.937L10 3.846ZM4.5 12A1.5 1.5 0 0 0 3 13.5v3A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-11ZM4 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3Z"
      />
    </svg>
  );
}
export default TextColor;
