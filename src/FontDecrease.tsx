import type { SVGProps } from "react";

export function FontDecrease(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.146 2.146a.5.5 0 0 1 .708 0L15.5 3.793l1.646-1.647a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708ZM10 4a.5.5 0 0 1 .463.31l4.5 11a.5.5 0 1 1-.926.38L12.5 11.931V12h-5v-.069L5.963 15.69a.5.5 0 1 1-.926-.378l4.5-11A.5.5 0 0 1 10 4Zm-2.119 7h4.238L10 5.82L7.881 11Z"
      />
    </svg>
  );
}
export default FontDecrease;
