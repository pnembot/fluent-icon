import type { SVGProps } from "react";

export function MatchAppLayout(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 7A1.5 1.5 0 0 0 2 8.5v3A1.5 1.5 0 0 0 3.5 13h4A1.5 1.5 0 0 0 9 11.5v-3A1.5 1.5 0 0 0 7.5 7h-4ZM3 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3ZM12.5 7A1.5 1.5 0 0 0 11 8.5v3a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 7h-4ZM12 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3Z"
      />
    </svg>
  );
}
export default MatchAppLayout;
