import type { SVGProps } from "react";

export function DocumentToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H13v-5a2 2 0 0 0-2-2h-1v-1a2 2 0 0 0-2-2H5a1.99 1.99 0 0 0-1 .268V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM4 12v-1.5A1.5 1.5 0 0 1 5.5 9h2A1.5 1.5 0 0 1 9 10.5V12h1.5a1.5 1.5 0 0 1 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default DocumentToolboxFilled;
