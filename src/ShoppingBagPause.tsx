import type { SVGProps } from "react";

export function ShoppingBagPause(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h3.257a5.503 5.503 0 0 1-.657-1H7a2 2 0 0 1-2-2V7h6v3.257a5.503 5.503 0 0 1 1-.657V7h3v2.022a5.5 5.5 0 0 1 1 .185V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2Zm-3 2a1.5 1.5 0 1 1 3 0V6H7V4.5Zm3.667-1.248A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.454-.121-.88-.333-1.248ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM13 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default ShoppingBagPause;
