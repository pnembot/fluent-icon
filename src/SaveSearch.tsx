import type { SVGProps } from "react";

export function SaveSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5a2 2 0 0 1 2-2h8.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V15a2 2 0 0 1-2 2h-2.879l-1-1H14v-4.5a.5.5 0 0 0-.5-.5h-3.257a4.529 4.529 0 0 0-.914-1H13.5a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 0 1-1V6.621a1 1 0 0 0-.293-.707l-1.621-1.621A1 1 0 0 0 13.379 4H13v2.5A1.5 1.5 0 0 1 11.5 8h-4A1.5 1.5 0 0 1 6 6.5V4H5a1 1 0 0 0-1 1v4.757a4.523 4.523 0 0 0-1 .914V5Zm4-1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V4H7Zm3 9.5c0 .786-.26 1.512-.697 2.096l2.55 2.55a.5.5 0 0 1-.707.708l-2.55-2.55A3.5 3.5 0 1 1 10 13.5Zm-6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0Z"
      />
    </svg>
  );
}
export default SaveSearch;
