import type { SVGProps } from "react";

export function DocumentTableSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.44 9.439A1.495 1.495 0 0 1 7.5 9h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H9.121l-.56-.56A4.482 4.482 0 0 0 9 13.5V15h3.5a.5.5 0 0 0 .5-.5V13H9v.5a4.481 4.481 0 0 0-1-2.829V10h-.5a.5.5 0 0 0-.145.021a4.503 4.503 0 0 0-.915-.582ZM13 10.5a.5.5 0 0 0-.5-.5H9v2h4v-1.5ZM5 9.027a4.551 4.551 0 0 0-1 0V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-3.085a1.495 1.495 0 0 0-.354-.56l-.44-.44H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.027ZM11.5 7h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Zm-4.197 8.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55ZM7 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
}
export default DocumentTableSearch;
