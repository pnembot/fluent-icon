import type { SVGProps } from "react";

export function ExtendedDockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.354 4.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L10 5.207l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3ZM3 10a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 10H3Zm6 0a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 9 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 11 10H9Zm4.5 1.5A1.5 1.5 0 0 1 15 10h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 17 15h-2a1.5 1.5 0 0 1-1.5-1.5v-2Z"
      />
    </svg>
  );
}
export default ExtendedDockFilled;
