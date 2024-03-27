import type { SVGProps } from "react";

export function DismissCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16ZM7.81 7.114a.5.5 0 0 0-.638.058l-.058.069a.5.5 0 0 0 .058.638L9.292 10l-2.12 2.121l-.058.07a.5.5 0 0 0 .058.637l.069.058a.5.5 0 0 0 .638-.058L10 10.708l2.121 2.12l.07.058a.5.5 0 0 0 .637-.058l.058-.069a.5.5 0 0 0-.058-.638L10.708 10l2.12-2.121l.058-.07a.5.5 0 0 0-.058-.637l-.069-.058a.5.5 0 0 0-.638.058L10 9.292l-2.121-2.12l-.07-.058Z"
      />
    </svg>
  );
}
export default DismissCircleFilled;
