import type { SVGProps } from "react";

export function HomeDatabaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.002 2.388a1.5 1.5 0 0 0-2.005 0l-5.5 4.942A1.5 1.5 0 0 0 3 8.445V15.5A1.5 1.5 0 0 0 4.5 17h4.55a2.458 2.458 0 0 1-.05-.5v-6c0-1.218.877-2.111 1.832-2.642C11.822 7.308 13.12 7 14.5 7c.642 0 1.267.067 1.851.194l-5.348-4.806ZM17 8.421C16.285 8.155 15.425 8 14.5 8C12.015 8 10 9.12 10 10.5s2.015 2.5 4.5 2.5s4.5-1.12 4.5-2.5c0-.867-.794-1.63-2-2.08ZM14.5 14c1.38 0 2.678-.309 3.668-.858c.293-.163.578-.36.833-.59L19 16.5c0 1.381-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default HomeDatabaseFilled;
