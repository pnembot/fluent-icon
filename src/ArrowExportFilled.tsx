import type { SVGProps } from "react";

export function ArrowExportFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 3.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75zm11.53 1.72l4.032 4.034a.745.745 0 0 1 .12.81a.746.746 0 0 1-.117.179l-.038.041l-3.997 3.996a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.75a.75.75 0 0 1 0-1.5h10.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default ArrowExportFilled;
