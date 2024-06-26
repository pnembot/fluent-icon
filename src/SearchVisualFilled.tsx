import type { SVGProps } from "react";

export function SearchVisualFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6.25A3.25 3.25 0 0 1 6.25 3h1a.75.75 0 0 1 0 1.5h-1A1.75 1.75 0 0 0 4.5 6.25v1a.75.75 0 0 1-1.5 0v-1Zm14 7.5A3.25 3.25 0 0 1 13.75 17h-1a.75.75 0 0 1 0-1.5h1a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1Zm0-7.5A3.25 3.25 0 0 0 13.75 3h-1a.75.75 0 0 0 0 1.5h1c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 0 1.5 0v-1ZM6.25 17A3.25 3.25 0 0 1 3 13.75v-1a.75.75 0 0 1 1.5 0v1c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1ZM10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM7 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default SearchVisualFilled;
