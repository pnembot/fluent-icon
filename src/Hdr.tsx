import type { SVGProps } from "react";

export function Hdr(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15H4.75A1.75 1.75 0 0 1 3 13.25v-6.5Zm1.5.75A.5.5 0 0 1 5 8v1.5h2V8a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5ZM9 8a.5.5 0 0 1 .5-.5h.25A2.25 2.25 0 0 1 12 9.75v.5a2.25 2.25 0 0 1-2.25 2.25H9.5A.5.5 0 0 1 9 12V8Zm1 3.475c.57-.116 1-.62 1-1.225v-.5c0-.605-.43-1.11-1-1.225v2.95ZM13 8a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 .868 2.724l.6 1.6a.5.5 0 0 1-.936.352l-.629-1.676H14V12a.5.5 0 0 1-1 0V8Zm1 1.5h.5a.5.5 0 0 0 0-1H14v1Z"
      />
    </svg>
  );
}
export default Hdr;
