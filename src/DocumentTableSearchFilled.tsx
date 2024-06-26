import type { SVGProps } from "react";

export function DocumentTableSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 15h3.5a.5.5 0 0 0 .5-.5V13H9v2Zm.121 1l1.44 1.44c.163.163.281.355.354.56H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.527a4.482 4.482 0 0 1 2.44.411A1.495 1.495 0 0 1 7.5 9h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H9.121ZM13 12v-1.5a.5.5 0 0 0-.5-.5H9v2h4Zm-2-9.75V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM7.303 15.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55ZM7 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
}
export default DocumentTableSearchFilled;
