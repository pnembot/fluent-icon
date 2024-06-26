import type { SVGProps } from "react";

export function CircleMultipleSubtractCheckmarkFilled(
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
        d="M12.917 6A7 7 0 0 0 6 12.917A6.002 6.002 0 0 1 7 1a6.002 6.002 0 0 1 5.917 5ZM9.124 6H4.5a.5.5 0 0 0 0 1h3.208a8.021 8.021 0 0 1 1.416-1ZM19 13a6 6 0 1 1-12 0a6 6 0 0 1 12 0Zm-3.146-1.854a.5.5 0 0 0-.708 0L12.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default CircleMultipleSubtractCheckmarkFilled;
