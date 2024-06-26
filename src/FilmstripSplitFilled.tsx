import type { SVGProps } from "react";

export function FilmstripSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 7a3 3 0 0 1 3-3h3.5v12H5a3 3 0 0 1-3-3V7Zm2.5-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 13.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm7 7V4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.5ZM15 7.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM15 9.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0Z"
      />
    </svg>
  );
}
export default FilmstripSplitFilled;
