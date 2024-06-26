import type { SVGProps } from "react";

export function TextSortAscendingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.709 2.505a.75.75 0 0 0-1.418 0l-2.25 6.5a.75.75 0 0 0 1.418.49l.344-.995h2.394l.344.995a.75.75 0 0 0 1.418-.49l-2.25-6.5ZM6 5.043L6.678 7H5.323L6 5.043ZM4 11a.75.75 0 0 0 0 1.5h2.527l-3.133 4.309A.75.75 0 0 0 4 18h4a.75.75 0 0 0 0-1.5H5.473l3.134-4.309A.75.75 0 0 0 8 11H4Zm10.25-9a.75.75 0 0 1 .75.75v12.572l1.447-1.579a.75.75 0 0 1 1.106 1.014l-2.75 3a.75.75 0 0 1-1.106 0l-2.75-3a.75.75 0 0 1 1.106-1.014l1.447 1.579V2.75a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default TextSortAscendingFilled;
