import type { SVGProps } from "react";

export function TextAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.75A.75.75 0 0 1 3.75 3h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5H9.5v7.706A5.48 5.48 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H6.75a.75.75 0 0 1 0-1.5H8v-11H4.5v.75a.75.75 0 0 1-1.5 0v-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default TextAddFilled;
