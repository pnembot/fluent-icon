import type { SVGProps } from "react";

export function SearchInfoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 8.5a5.5 5.5 0 1 0-1.98 4.227l4.126 4.127l.07.057a.5.5 0 0 0 .638-.765l-4.127-4.126A5.478 5.478 0 0 0 14 8.5ZM8.5 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1ZM9 8.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default SearchInfoFilled;
