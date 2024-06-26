import type { SVGProps } from "react";

export function ArrowReplyAll(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.096 3.904a.5.5 0 0 1 .058.638l-.058.07L6.707 8H10a7.5 7.5 0 0 1 7.496 7.258l.004.243a.5.5 0 0 1-1 0a6.5 6.5 0 0 0-6.267-6.496L10 9H6.707l3.39 3.39a.5.5 0 0 1-.639.764l-.069-.057l-4.243-4.243a.5.5 0 0 1-.057-.638l.057-.07L9.39 3.905a.5.5 0 0 1 .707 0Zm-7.95 4.243L6.39 3.904a.5.5 0 0 1 .765.638l-.058.07L3.207 8.5l3.89 3.89a.5.5 0 0 1-.639.764l-.069-.057l-4.243-4.243a.5.5 0 0 1-.057-.638l.057-.07L6.39 3.905L2.146 8.147Z"
      />
    </svg>
  );
}
export default ArrowReplyAll;
