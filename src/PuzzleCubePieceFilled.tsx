import type { SVGProps } from "react";

export function PuzzleCubePieceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.794 1.29a1 1 0 0 1 1.414 0l1.503 1.503a1 1 0 0 1 0 1.414L17.208 5.71a1 1 0 0 1-1.414 0L14.29 4.207a1 1 0 0 1 0-1.414l1.503-1.503ZM5.5 17H7v-4H3v1.5A2.5 2.5 0 0 0 5.5 17ZM7 8v4H3V8h4Zm5 4H8V8h4v4Zm-4 1h4v4H8v-4Zm5-5v4h4V8h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM3 7h4V3H5.5A2.5 2.5 0 0 0 3 5.5V7Zm5 0V3h4v4H8Z"
      />
    </svg>
  );
}
export default PuzzleCubePieceFilled;
