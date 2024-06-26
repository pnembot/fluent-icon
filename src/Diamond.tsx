import type { SVGProps } from "react";

export function Diamond(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.586 11.414a2 2 0 0 1 0-2.828l6.002-6a2 2 0 0 1 2.828 0l6.002 6a2 2 0 0 1 0 2.828l-6.002 6a2 2 0 0 1-2.828 0l-6.002-6Zm.707-2.121a1 1 0 0 0 0 1.414l6.002 6a1 1 0 0 0 1.414 0l6.002-6a1 1 0 0 0 0-1.414l-6.002-6a1 1 0 0 0-1.414 0l-6.002 6Z"
      />
    </svg>
  );
}
export default Diamond;
