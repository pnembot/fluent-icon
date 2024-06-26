import type { SVGProps } from "react";

export function ReadingList(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6.25a1.25 1.25 0 0 1 2.29-.692a.5.5 0 1 0 .833-.555A2.25 2.25 0 1 0 4.25 8.5a.505.505 0 0 0 .066-.004a.506.506 0 0 0 .065.004H15.5a.5.5 0 0 0 0-1H4.381a.505.505 0 0 0-.065.004a.505.505 0 0 0-.066-.004C3.56 7.5 3 6.94 3 6.25ZM8.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM2 13a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 2 13Zm3.5 2a.5.5 0 0 0 0 1h12.003a.5.5 0 1 0 0-1H5.5Z"
      />
    </svg>
  );
}
export default ReadingList;
