import type { SVGProps } from "react";

export function DocumentLandscapeDataFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM9 7a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V7Zm5 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm-9 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
      />
    </svg>
  );
}
export default DocumentLandscapeDataFilled;
