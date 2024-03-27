import type { SVGProps } from "react";

export function CodeRbRectangle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M10.996 7.6a1.5 1.5 0 0 1-.269.762A1.5 1.5 0 0 1 9.75 11H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.496 1.6ZM9.5 7H9v1h.5a.5.5 0 1 0 0-1ZM9 10h.75a.5.5 0 0 0 0-1H9v1ZM6.522 8.588c.237.393.406.823.5 1.272l.019.077c.018.076.035.145.054.2a.5.5 0 0 1-.343.863c-.476 0-.59-.458-.7-.899V10.1l-.003-.01C5.96 9.73 5.773 9 5.5 9H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.022 2.588ZM5.5 7H5v1h.5a.5.5 0 1 0 0-1ZM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3h-9.5ZM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z"
      />
    </svg>
  );
}
export default CodeRbRectangle;
