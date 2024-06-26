import type { SVGProps } from "react";

export function DocumentTableFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 15v-2h4v1.5a.5.5 0 0 1-.5.5H9Zm4-4.5V12H9v-2h3.5a.5.5 0 0 1 .5.5ZM7 13h1v2h-.5a.5.5 0 0 1-.5-.5V13Zm1-1v-2h-.5a.5.5 0 0 0-.5.5V12h1Zm2-5.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4A1.5 1.5 0 0 1 7.5 9h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 14.5v-4Zm5-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentTableFilled;
