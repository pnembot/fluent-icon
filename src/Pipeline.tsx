import type { SVGProps } from "react";

export function Pipeline(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0V14H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM15 7H5v6h10V7Zm2-1.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z"
      />
    </svg>
  );
}
export default Pipeline;
