import type { SVGProps } from "react";

export function WindowDevToolsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v8.498a2.75 2.75 0 0 0 2.75 2.75h5.885c.035-.08.074-.16.119-.237l.729-1.262H4.75c-.69 0-1.25-.56-1.25-1.25V6h10.997v1.15a3.8 3.8 0 0 1 1.5-.437V4.75A2.75 2.75 0 0 0 13.247 2H4.75Zm9.272 10.1a2.78 2.78 0 0 1 2.77-4.352l-1.312 2.27a.927.927 0 0 0 1.605.927l1.31-2.27a2.78 2.78 0 0 1-2.362 4.575l-2.407 4.17a1.158 1.158 0 1 1-2.006-1.159l2.402-4.161Zm-1.46-.955a3.764 3.764 0 0 1 .215-2.076l-1.923-1.923a.5.5 0 1 0-.707.708L12.293 10l-2.146 2.146a.5.5 0 0 0 .707.708l1.708-1.709ZM8.354 7.146a.5.5 0 0 1 0 .708L6.208 10l2.146 2.146a.5.5 0 0 1-.707.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default WindowDevToolsFilled;
