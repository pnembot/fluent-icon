import type { SVGProps } from "react";

export function BookCompass(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-5 .5a.5.5 0 0 1 .5.5v1.063a2 2 0 0 1 .743 3.504l1.214 2.73a.5.5 0 0 1-.914.406l-1.213-2.73a2.014 2.014 0 0 1-.66 0l-1.213 2.73a.5.5 0 1 1-.914-.406l1.213-2.73A2 2 0 0 1 9.5 6.063V5a.5.5 0 0 1 .5-.5Zm-.5 2.634a1 1 0 1 0 1 1.731a1 1 0 0 0-1-1.731Z"
      />
    </svg>
  );
}
export default BookCompass;
