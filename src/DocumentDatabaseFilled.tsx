import type { SVGProps } from "react";

export function DocumentDatabaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-4c.306-.425.5-.927.5-1.5l.001-3.947l.001-2.247l-.009.008c-.104-1.421-1.389-2.363-2.645-2.83a7.508 7.508 0 0 0-1.293-.349A8.86 8.86 0 0 0 5.5 7c-.515 0-1.02.043-1.5.126V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM6.88 8.12c.4.071.777.173 1.12.3c1.206.45 2 1.213 2 2.08c0 1.38-2.015 2.5-4.5 2.5S1 11.88 1 10.5S3.015 8 5.5 8c.481 0 .945.042 1.38.12ZM5.5 14c1.38 0 2.679-.309 3.668-.858c.293-.163.578-.36.833-.59L10 16.5c0 1.38-2.015 2.5-4.5 2.5S1 17.88 1 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default DocumentDatabaseFilled;
