import type { SVGProps } from "react";

export function Broom(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.91 2.182a.5.5 0 0 1 0 .707L12.587 8.21a4.5 4.5 0 0 1-.334 5.991l-.664.664l-2.09 3.483a.5.5 0 0 1-.781.096l-7.072-7.071a.5.5 0 0 1 .097-.782l3.482-2.09l.664-.664a4.5 4.5 0 0 1 5.991-.334l5.323-5.322a.5.5 0 0 1 .707 0ZM6.243 8.899l4.95 4.95l.353-.354a3.5 3.5 0 1 0-4.95-4.95l-.353.354Zm-.785.63l-2.652 1.59l6.166 6.166l1.59-2.652L5.459 9.53Z"
      />
    </svg>
  );
}
export default Broom;
