import type { SVGProps } from "react";

export function SquareEraserFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.733 13.637l4.9-4.9A2.478 2.478 0 0 1 17 8.589V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.591a2.5 2.5 0 0 1 .142-3.363Zm7.736-4.198l2.095 2.095a1.499 1.499 0 0 1 0 2.122l-3.6 3.6l-4.216-4.217l3.6-3.6a1.5 1.5 0 0 1 2.121 0Zm-2.212 8.523l-4.216-4.217l-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.5 1.5 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531l.038-.038Z"
      />
    </svg>
  );
}
export default SquareEraserFilled;
