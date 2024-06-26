import type { SVGProps } from "react";

export function WindowWrenchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.049a2.48 2.48 0 0 1 .443-1H6a2 2 0 0 1-2-2V7h12v1.03h.007c.434.05.779.281.993.594V6a3 3 0 0 0-3-3H6Zm6.168 10.7a3.518 3.518 0 0 1 3.724-4.676a.387.387 0 0 1 .35.337a.489.489 0 0 1-.14.405l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132l2.726-2.726Z"
      />
    </svg>
  );
}
export default WindowWrenchFilled;
