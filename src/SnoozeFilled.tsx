import type { SVGProps } from "react";

export function SnoozeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.75 4a.75.75 0 0 0 0 1.5h3.883l-4.455 5.265A.75.75 0 0 0 10.75 12h5.5a.75.75 0 0 0 0-1.5h-3.883l4.456-5.266A.75.75 0 0 0 16.25 4h-5.5Zm-7 6a.75.75 0 0 0 0 1.5h1.967l-2.559 3.29A.75.75 0 0 0 3.75 16h3.5a.75.75 0 0 0 0-1.5H5.283l2.559-3.29A.75.75 0 0 0 7.25 10h-3.5Z"
      />
    </svg>
  );
}
export default SnoozeFilled;
