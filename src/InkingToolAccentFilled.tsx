import type { SVGProps } from "react";

export function InkingToolAccentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 6V3H3v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 6Zm-4.554 1l-2.388 4.776a.5.5 0 1 0 .894.448L13.564 7L13 6.5l-.554.5ZM10 17.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5Z"
      />
    </svg>
  );
}
export default InkingToolAccentFilled;
