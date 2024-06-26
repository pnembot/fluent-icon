import type { SVGProps } from "react";

export function ArrowCircleUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m6.646 9.146l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L10.5 7.707V13.5a.5.5 0 0 1-1 0V7.707L7.354 9.854a.5.5 0 0 1-.708-.708ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default ArrowCircleUp;
