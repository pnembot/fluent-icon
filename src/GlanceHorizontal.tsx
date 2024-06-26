import type { SVGProps } from "react";

export function GlanceHorizontal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 15.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5ZM11 7.5A1.5 1.5 0 0 1 9.5 9h-5A1.5 1.5 0 0 1 3 7.5v-3A1.5 1.5 0 0 1 4.5 3h5A1.5 1.5 0 0 1 11 4.5v3ZM9.5 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5Zm6 1A1.5 1.5 0 0 0 17 7.5v-3A1.5 1.5 0 0 0 15.5 3h-1A1.5 1.5 0 0 0 13 4.5v3A1.5 1.5 0 0 0 14.5 9h1Zm.5-1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3Zm-9 8A1.5 1.5 0 0 1 5.5 17h-1A1.5 1.5 0 0 1 3 15.5v-3A1.5 1.5 0 0 1 4.5 11h1A1.5 1.5 0 0 1 7 12.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1Z"
      />
    </svg>
  );
}
export default GlanceHorizontal;
