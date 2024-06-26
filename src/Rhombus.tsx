import type { SVGProps } from "react";

export function Rhombus(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.89 4.296A2 2 0 0 1 6.76 3h10.237a2 2 0 0 1 1.872 2.704l-3.76 10A2 2 0 0 1 13.238 17H3.001a2 2 0 0 1-1.872-2.704l3.76-10ZM6.76 4a1 1 0 0 0-.936.648l-3.76 10A1 1 0 0 0 3.001 16h10.237a1 1 0 0 0 .936-.648l3.76-10A1 1 0 0 0 16.998 4H6.761Z"
      />
    </svg>
  );
}
export default Rhombus;
