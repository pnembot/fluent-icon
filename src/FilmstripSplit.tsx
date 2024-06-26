import type { SVGProps } from "react";

export function FilmstripSplit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 6.5A2.5 2.5 0 0 1 4.5 4h4v1h-4A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h4v1h-4A2.5 2.5 0 0 1 2 13.5v-7ZM11.5 5V4h4A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-4v-1h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 5h-4ZM15 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM15 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 12.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default FilmstripSplit;
