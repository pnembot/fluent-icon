import type { SVGProps } from "react";

export function Shapes(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 3a4.5 4.5 0 0 0-.5 8.973v1.005A5.5 5.5 0 1 1 12.978 7h-1.005A4.5 4.5 0 0 0 7.5 3Zm3 5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5ZM9 10.5A1.5 1.5 0 0 1 10.5 9h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-5Z"
      />
    </svg>
  );
}
export default Shapes;
