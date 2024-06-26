import type { SVGProps } from "react";

export function DocumentCopy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 17 7.414V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 11 6.5V3H8Zm4 .207V6.5a.5.5 0 0 0 .5.5h3.293L12 3.207ZM4 5a1 1 0 0 1 1-1v10a3 3 0 0 0 3 3h7a1 1 0 0 1-1 1H7.94A3.94 3.94 0 0 1 4 14.06V5Z"
      />
    </svg>
  );
}
export default DocumentCopy;
