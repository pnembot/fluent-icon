import type { SVGProps } from "react";

export function DatabaseStack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M8 1C5.149 1 3 2.075 3 3.5v9C3 13.925 5.149 15 8 15s5-1.075 5-2.5v-9C13 2.075 10.851 1 8 1Zm0 1c2.441 0 4 .888 4 1.5S10.441 5 8 5s-4-.888-4-1.5S5.558 2 8 2Zm0 12c-2.442 0-4-.889-4-1.5V9.537c.897.593 2.328.963 4 .963c1.672 0 3.103-.37 4-.963V12.5c0 .611-1.559 1.5-4 1.5Zm0-4.5c-2.442 0-4-.888-4-1.5V5.021A7.409 7.409 0 0 0 8 6a7.409 7.409 0 0 0 4-.979V8c0 .612-1.558 1.5-4 1.5Z"
      />
    </svg>
  );
}
export default DatabaseStack;
