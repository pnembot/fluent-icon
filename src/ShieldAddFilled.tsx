import type { SVGProps } from "react";

export function ShieldAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.723 2.084a.5.5 0 0 1 .554 0a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.6a5.5 5.5 0 0 0-6.782 8.352l-.038.015a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ShieldAddFilled;
