import type { SVGProps } from "react";

export function FlagFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 13h11a.5.5 0 0 0 .416-.777L13.101 8l2.815-4.223A.5.5 0 0 0 15.5 3H4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Z"
      />
    </svg>
  );
}
export default FlagFilled;
