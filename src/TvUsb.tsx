import type { SVGProps } from "react";

export function TvUsb(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.268A1.99 1.99 0 0 0 17 7V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8v.179a2 2 0 0 0 .176.821H4a2 2 0 0 1-2-2V6Zm11.5 10.915L12.845 16H5.5a.5.5 0 0 0 0 1h8v-.085ZM14 9v2a1 1 0 0 0-1 1v2.179a1 1 0 0 0 .187.582l1.313 1.833V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.406l1.309-1.8a1 1 0 0 0 .191-.588V12a1 1 0 0 0-1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Zm3 2h-2V9h2v2Z"
      />
    </svg>
  );
}
export default TvUsb;
