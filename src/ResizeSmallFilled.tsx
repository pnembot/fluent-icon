import type { SVGProps } from "react";

export function ResizeSmallFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1Zm3 3A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3Zm6-3A1.5 1.5 0 0 1 16 5.5v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 14.5 3h-1a.5.5 0 0 0 0 1h1Zm0 12a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1Zm-9 0A1.5 1.5 0 0 1 4 14.5v-1.25a.5.5 0 0 0-1 0v1.25A2.5 2.5 0 0 0 5.5 17h1.25a.5.5 0 0 0 0-1H5.5Z"
      />
    </svg>
  );
}
export default ResizeSmallFilled;
