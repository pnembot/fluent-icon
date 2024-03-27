import type { SVGProps } from "react";

export function TicketDiagonalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.735 2.53a1.75 1.75 0 0 0-2.475 0l-7.732 7.732a1.75 1.75 0 0 0 0 2.475l.775.775c.407.407.986.337 1.346.14a1.25 1.25 0 0 1 1.696 1.696c-.196.36-.266.94.14 1.347l.775.774a1.75 1.75 0 0 0 2.475 0l7.733-7.732a1.75 1.75 0 0 0 0-2.475l-.776-.775c-.406-.406-.985-.337-1.345-.14a1.25 1.25 0 0 1-1.696-1.696c.196-.36.266-.94-.14-1.346l-.776-.775Z"
      />
    </svg>
  );
}
export default TicketDiagonalFilled;
