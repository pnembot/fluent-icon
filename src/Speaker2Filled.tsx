import type { SVGProps } from "react";

export function Speaker2Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 3.006c0-.873-1.04-1.327-1.68-.733L6.448 5.866a.5.5 0 0 1-.34.134H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h2.607a.5.5 0 0 1 .34.133l3.873 3.594c.64.593 1.68.14 1.68-.733V3.006Zm3.254 1.621a.5.5 0 0 1 .706.04a8 8 0 0 1 0 10.666a.5.5 0 1 1-.745-.667a7 7 0 0 0 0-9.333a.5.5 0 0 1 .039-.706Zm-1.175 8.306a.5.5 0 0 1-.184-.683a4.498 4.498 0 0 0 0-4.5a.5.5 0 1 1 .865-.5a5.498 5.498 0 0 1 .001 5.5a.5.5 0 0 1-.682.183Z"
      />
    </svg>
  );
}
export default Speaker2Filled;
