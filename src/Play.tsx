import type { SVGProps } from "react";

export function Play(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.22 8.687a1.498 1.498 0 0 1 0 2.626l-9.997 5.499A1.5 1.5 0 0 1 5 15.499V4.501a1.5 1.5 0 0 1 2.223-1.313l9.997 5.499Zm-.482 1.75a.5.5 0 0 0 0-.875L6.741 4.063A.5.5 0 0 0 6 4.501v10.998a.5.5 0 0 0 .741.438l9.997-5.5Z"
      />
    </svg>
  );
}
export default Play;
