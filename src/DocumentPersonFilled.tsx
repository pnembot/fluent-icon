import type { SVGProps } from "react";

export function DocumentPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.632c.25-.473.368-.988.368-1.5a2.5 2.5 0 0 0-2.273-2.49A3 3 0 0 0 4 9.041V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM6.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM8 16.5C8 17.745 7 19 4.5 19S1 17.75 1 16.5A1.5 1.5 0 0 1 2.5 15h4A1.5 1.5 0 0 1 8 16.5Z"
      />
    </svg>
  );
}
export default DocumentPersonFilled;
