import type { SVGProps } from "react";

export function DocumentFlowchart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8v1.793L9.207 13H11v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H9.207l-1.353 1.354a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708L7 11.793V10h-.5a.5.5 0 0 1-.5-.5v-2ZM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6ZM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Z"
      />
    </svg>
  );
}
export default DocumentFlowchart;
