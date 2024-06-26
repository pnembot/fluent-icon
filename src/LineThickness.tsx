import type { SVGProps } from "react";

export function LineThickness(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 10A1.5 1.5 0 0 1 3.5 13h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 14.5ZM3 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H3Z"
      />
    </svg>
  );
}
export default LineThickness;
