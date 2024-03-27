import type { SVGProps } from "react";

export function LineHorizontal4SearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 10a4.48 4.48 0 0 0 2.607-.832l3.613 3.612a.75.75 0 1 0 1.06-1.06l-3.612-3.613A4.5 4.5 0 1 0 12.5 10Zm0-7.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm3.025 8.5l1.5 1.5H2.75a.75.75 0 0 1 0-1.5h12.775ZM2.75 3H7.6a5.46 5.46 0 0 0-.51 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 4h4.457c.152.538.384 1.043.682 1.5H2.75a.75.75 0 0 1 0-1.5ZM2 15.75a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default LineHorizontal4SearchFilled;
