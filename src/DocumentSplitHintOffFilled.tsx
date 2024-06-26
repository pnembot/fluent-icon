import type { SVGProps } from "react";

export function DocumentSplitHintOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.707V9.5a.5.5 0 0 0 .5.5h4.793L15 15.707V16a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.905-1.388l1.241 1.242a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4 4.707Zm11 8.172l.61.61A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0v.879ZM4.502 2.38l7.62 7.62H15.5a.5.5 0 0 0 .5-.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5c-.383 0-.733.144-.998.38ZM11 2.25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1v-.5Zm6 1.5H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z"
      />
    </svg>
  );
}
export default DocumentSplitHintOffFilled;
