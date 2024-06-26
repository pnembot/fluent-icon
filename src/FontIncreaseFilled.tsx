import type { SVGProps } from "react";

export function FontIncreaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.238 4.82a.75.75 0 0 1-.976-1.14l1.75-1.5a.75.75 0 0 1 .976 0l1.75 1.5a.75.75 0 1 1-.976 1.14L15.5 3.737l-1.262 1.081ZM10 3.75a.75.75 0 0 0-.694.466l-4.5 11a.75.75 0 0 0 1.388.568L7.64 12.25h4.72l1.446 3.534a.75.75 0 1 0 1.388-.568l-4.5-11A.75.75 0 0 0 10 3.75Zm0 2.73l1.746 4.27H8.255L10 6.48Z"
      />
    </svg>
  );
}
export default FontIncreaseFilled;
