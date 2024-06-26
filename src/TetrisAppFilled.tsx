import type { SVGProps } from "react";

export function TetrisAppFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2.75A.75.75 0 0 1 7.75 2H11v4H7V2.75ZM2.75 7a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75H6V7H2.75ZM11 7H7v4h3.25a.75.75 0 0 0 .75-.75V7Zm4.25-5H12v4h3.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75ZM4 14.75a.75.75 0 0 1 .75-.75H8v4H4.75a.75.75 0 0 1-.75-.75v-2.5ZM13 18v-4H9v4h4Zm5-4v3.25a.75.75 0 0 1-.75.75H14v-4h4Zm-3.25-5a.75.75 0 0 0-.75.75V13h4V9.75a.75.75 0 0 0-.75-.75h-2.5Z"
      />
    </svg>
  );
}
export default TetrisAppFilled;
