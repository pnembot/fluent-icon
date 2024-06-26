import type { SVGProps } from "react";

export function DocumentData(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM10 9a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 10 9Zm3 2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4ZM4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6Zm5.5 4h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
}
export default DocumentData;
