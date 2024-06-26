import type { SVGProps } from "react";

export function ArrowFitInFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.21 7.781A.75.75 0 1 1 6.27 6.72l2.51 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.684l-1.223-1.22Zm9.58 0a.75.75 0 0 0-1.06-1.062l-2.51 2.5a.75.75 0 0 0 0 1.061l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.684l1.223-1.219Z"
      />
    </svg>
  );
}
export default ArrowFitInFilled;
