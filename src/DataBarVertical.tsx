import type { SVGProps } from "react";

export function DataBarVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2ZM4 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5Zm4 3a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0V8Zm2-1a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm3 4a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default DataBarVertical;
