import type { SVGProps } from "react";

export function LeafTwoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.318 3C2.59 3 2 3.59 2 4.318V8a5 5 0 0 0 4.487 4.974A6.48 6.48 0 0 1 6 10.5c0-.83.156-1.624.44-2.354L5.145 6.854a.5.5 0 1 1 .708-.708l1.048 1.049a6.52 6.52 0 0 1 3.508-2.852A4.983 4.983 0 0 0 7 3H3.318Zm4.955 11.02l-2.137 2.137a.5.5 0 1 0 .707.707l2.137-2.137A5.5 5.5 0 0 0 18 10.5V6.41C18 5.63 17.37 5 16.59 5H12.5a5.5 5.5 0 0 0-4.227 9.02Zm4.58-3.166l-3.162 3.162a4.524 4.524 0 0 1-.707-.707l3.162-3.163a.5.5 0 0 1 .708.707Z"
      />
    </svg>
  );
}
export default LeafTwoFilled;
