import type { SVGProps } from "react";

export function BugProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 10a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9ZM11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.482 3.482 0 0 1-.7-2.1Zm3.5 3.5a3.482 3.482 0 0 1-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6ZM17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.315-2.922c.206-.322.316-.696.315-1.078v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3a2 2 0 0 0 .315 1.078A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.986 3.986 0 0 0 3.587 3.958A5.462 5.462 0 0 1 9 14.5a5.506 5.506 0 0 1 5-5.475V8h.5A2.5 2.5 0 0 0 17 5.5v-2Z"
      />
    </svg>
  );
}
export default BugProhibitedFilled;
