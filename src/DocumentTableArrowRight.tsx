import type { SVGProps } from "react";

export function DocumentTableArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 9c-.243 0-.473.058-.676.16A5.485 5.485 0 0 1 9 10.257V10h3.5a.5.5 0 0 1 .5.5V12h-2.6c.162.317.294.651.393 1H13v1.5a.5.5 0 0 1-.5.5h-1.522a5.489 5.489 0 0 1-.185 1H12.5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 9h-5ZM4 9.207a5.48 5.48 0 0 1 1-.185V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.6a5.507 5.507 0 0 1-.657 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6a2 2 0 0 0-2 2v5.207ZM14.793 7H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003A.498.498 0 0 0 8 14.503v-.006a.498.498 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L6.293 14H3.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default DocumentTableArrowRight;
