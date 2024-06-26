import type { SVGProps } from "react";

export function ArrowExport(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm11.354 1.646l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.707l3.147-3.147H5.5a.5.5 0 0 1 0-1h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default ArrowExport;
