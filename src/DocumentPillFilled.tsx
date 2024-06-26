import type { SVGProps } from "react";

export function DocumentPillFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v.913a3.605 3.605 0 0 0-2.06 1.027l-4 4A3.623 3.623 0 0 0 9.202 18H5.5A1.5 1.5 0 0 1 4 16.5v-13A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25Zm7.354 8.397a2.621 2.621 0 0 0-3.708 0l-4 4a2.621 2.621 0 0 0 3.707 3.707l4-4a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 1 1 2.292 2.293L16 15.293L13.707 13l1.646-1.646Zm-1.5 4.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default DocumentPillFilled;
