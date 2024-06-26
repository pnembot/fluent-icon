import type { SVGProps } from "react";

export function FontIncrease(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.854 4.854a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.708L15.5 3.207l-1.646 1.647ZM10 4a.5.5 0 0 0-.463.31l-4.5 11a.5.5 0 1 0 .926.38L7.5 11.93V12h5v-.068l1.537 3.757a.5.5 0 1 0 .926-.378l-4.5-11A.5.5 0 0 0 10 4Zm0 1.82L12.119 11H7.88L10 5.82Z"
      />
    </svg>
  );
}
export default FontIncrease;
