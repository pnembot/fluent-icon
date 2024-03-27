import type { SVGProps } from "react";

export function Certificate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3a2 2 0 0 0-2 2v3.671c.285-.352.622-.66 1-.913V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9.242a4.514 4.514 0 0 1-.242.329V15h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 8.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm-2.5.242A4.479 4.479 0 0 0 5.5 16c.925 0 1.785-.28 2.5-.758V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18v-2.758ZM10.5 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default Certificate;
