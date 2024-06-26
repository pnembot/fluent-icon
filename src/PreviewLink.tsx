import type { SVGProps } from "react";

export function PreviewLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v2.998a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V5.5ZM5 6v1.998h10V6H5Zm6.498 4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm.5 4v-3h3v3h-3ZM4 11a.5.5 0 0 1 .5-.5h5.004a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 11Zm.5 2.5a.5.5 0 0 0 0 1h5.003a.5.5 0 0 0 0-1H4.501ZM2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4A1.5 1.5 0 0 0 3 5.5v9A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15.5 4h-11Z"
      />
    </svg>
  );
}
export default PreviewLink;
