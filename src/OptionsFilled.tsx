import type { SVGProps } from "react";

export function OptionsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.25 5h-2.364a2.501 2.501 0 0 0-4.771 0H2.75a.75.75 0 0 0 0 1.5h7.364a2.501 2.501 0 0 0 4.771 0h2.365a.75.75 0 0 0 0-1.5Zm-14.5 8.5a.75.75 0 0 0 0 1.5h2.364a2.501 2.501 0 0 0 4.772 0h7.364a.75.75 0 0 0 0-1.5H9.886a2.501 2.501 0 0 0-4.772 0H2.75Z"
      />
    </svg>
  );
}
export default OptionsFilled;
