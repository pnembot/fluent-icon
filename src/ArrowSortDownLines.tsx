import type { SVGProps } from "react";

export function ArrowSortDownLines(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m7.21 15.29l2.644-2.644a.5.5 0 0 1 .707.707L7.093 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79ZM9.5 4a.5.5 0 0 0 0 1h7a.5.5 0 1 0 0-1h-7Zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5Zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2Z"
      />
    </svg>
  );
}
export default ArrowSortDownLines;
