import type { SVGProps } from "react";

export function PipelineAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.757a5.503 5.503 0 0 0-1-.657V5.5a.5.5 0 0 0-1 0v3.707a5.48 5.48 0 0 0-1-.185V7H5v6h4.207a5.48 5.48 0 0 0-.185 1H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Zm15 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default PipelineAdd;
