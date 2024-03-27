import type { SVGProps } from "react";

export function VideoPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM7 15h6v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15Zm7 0h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V15Z"
      />
    </svg>
  );
}
export default VideoPerson;
