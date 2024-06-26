import type { SVGProps } from "react";

export function PipelineAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3-.001v-9Zm12 3.522A5.501 5.501 0 0 0 9.022 14H6V6h8v3.022ZM15 5.5v3.522a5.475 5.475 0 0 1 3 1.235V5.5a1.5 1.5 0 0 0-3 0Zm4 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default PipelineAddFilled;
