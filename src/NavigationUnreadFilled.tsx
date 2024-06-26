import type { SVGProps } from "react";

export function NavigationUnreadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.978 4.568a2.25 2.25 0 1 0-.254.764l.004-.01c.125-.23.212-.484.25-.754ZM2.75 4h9.76a3.283 3.283 0 0 0 .24 1.5h-10a.75.75 0 0 1 0-1.5ZM2 9.75A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"
      />
    </svg>
  );
}
export default NavigationUnreadFilled;
