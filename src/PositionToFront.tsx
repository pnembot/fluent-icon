import type { SVGProps } from "react";

export function PositionToFront(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v-.5c0-.17.012-.337.035-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.035A3.53 3.53 0 0 1 7.5 4H8V3a2 2 0 0 0-2-2H3Zm9 16v-1h.5c.17 0 .337-.012.5-.035V17a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1.035c.023-.163.035-.33.035-.5V12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Zm2.277-1.484a1.5 1.5 0 0 0-1.26 1.261l1.26-1.26ZM6 10.293L10.293 6H8.708L6 8.708v1.585ZM11.707 6L6 11.707v.793c0 .232.052.45.146.647l7-7A1.495 1.495 0 0 0 12.5 6h-.793ZM7.5 14h.793L14 8.294V7.5c0-.232-.053-.45-.146-.647l-7 7c.195.095.414.147.646.147Zm2.207 0h1.586L14 11.293V9.707L9.707 14Zm3.017-.017a1.5 1.5 0 0 0 1.26-1.26l-1.26 1.26Z"
      />
    </svg>
  );
}
export default PositionToFront;
