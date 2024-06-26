import type { SVGProps } from "react";

export function CircleMultipleSubtractCheckmark(
  props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>
) {
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
        d="M7 2a5.002 5.002 0 0 1 4.916 4.083c.327-.05.661-.079 1.001-.083A6.002 6.002 0 0 0 1 7a6.002 6.002 0 0 0 5 5.917a7.15 7.15 0 0 1 .083-1A5.002 5.002 0 0 1 7 2ZM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm11.354 5.854a.5.5 0 0 0-.708-.708L12.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3ZM13 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-1a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"
      />
    </svg>
  );
}
export default CircleMultipleSubtractCheckmark;
