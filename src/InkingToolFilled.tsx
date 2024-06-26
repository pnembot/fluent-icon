import type { SVGProps } from "react";

export function InkingToolFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.52 15c-.014.165-.02.332-.02.5c0 .582.072 1.162.273 1.616c.208.47.6.884 1.227.884c.627 0 1.019-.414 1.227-.884c.2-.454.273-1.034.273-1.616c0-.168-.006-.335-.02-.5H8.52ZM2.5 5.5v-3A.5.5 0 0 1 3 2h14a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 1 16 7H4a1.5 1.5 0 0 1-1.5-1.5ZM4.75 8l2.724 5.447a1 1 0 0 0 .894.553h3.264a1 1 0 0 0 .894-.553L15.25 8H4.75Z"
      />
    </svg>
  );
}
export default InkingToolFilled;
