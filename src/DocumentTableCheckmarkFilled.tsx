import type { SVGProps } from "react";

export function DocumentTableCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 10.257A5.521 5.521 0 0 1 10.4 12H13v-1.5a.5.5 0 0 0-.5-.5H9v.257ZM13 13h-2.207a5.506 5.506 0 0 1 .185 2H12.5a.5.5 0 0 0 .5-.5V13ZM5.5 9c.457 0 .9.056 1.324.16c.203-.102.433-.16.676-.16h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1.707a5.486 5.486 0 0 1-1.05 2H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.707A5.5 5.5 0 0 1 5.5 9ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-1 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L4.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default DocumentTableCheckmarkFilled;
