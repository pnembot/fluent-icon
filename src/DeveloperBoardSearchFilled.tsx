import type { SVGProps } from "react";

export function DeveloperBoardSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM8.5 1a.5.5 0 0 1 .5.5V3h1.5V1.5a.5.5 0 0 1 1 0V3H13V1.5a.5.5 0 0 1 1 0V3h.5A2.5 2.5 0 0 1 17 5.5V6h1.5a.5.5 0 0 1 0 1H17v1.5h1.5a.5.5 0 0 1 0 1H17V11h1.5a.5.5 0 0 1 0 1H17v.5a2.5 2.5 0 0 1-2.5 2.5H14v1.5a.5.5 0 0 1-1 0V15h-1.5v1.5a.5.5 0 0 1-1 0V15H8.744a4.5 4.5 0 0 0-5.685-5.764A.5.5 0 0 1 3.5 8.5H5V7H3.5a.5.5 0 0 1 0-1H5v-.5A2.5 2.5 0 0 1 7.5 3H8V1.5a.5.5 0 0 1 .5-.5ZM11 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-6.5 5c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default DeveloperBoardSearchFilled;
