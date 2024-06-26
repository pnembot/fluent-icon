import type { SVGProps } from "react";

export function TextSortDescendingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a.75.75 0 1 0 0 1.5h2.527L3.394 7.809A.75.75 0 0 0 4 9h4a.75.75 0 0 0 0-1.5H5.473l3.134-4.309A.75.75 0 0 0 8 2H4Zm2.709 8.505a.75.75 0 0 0-1.418 0l-2.25 6.5a.75.75 0 1 0 1.418.49l.344-.995h2.394l.344.995a.75.75 0 1 0 1.418-.49l-2.25-6.5ZM6 13.043L6.678 15H5.323L6 13.043ZM14.25 2a.75.75 0 0 1 .75.75v12.572l1.447-1.579a.75.75 0 0 1 1.106 1.014l-2.75 3a.75.75 0 0 1-1.106 0l-2.75-3a.75.75 0 0 1 1.106-1.014l1.447 1.579V2.75a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default TextSortDescendingFilled;
