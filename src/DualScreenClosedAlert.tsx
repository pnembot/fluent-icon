import type { SVGProps } from "react";

export function DualScreenClosedAlert(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 5a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H9.503a.5.5 0 0 1-.323-.881L10.5 7V5Zm3 6a1.501 1.501 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1ZM6 6h3.5V5H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-3.05a2.519 2.519 0 0 1-1 0V15a1 1 0 0 1-1 1H6V6Z"
      />
    </svg>
  );
}
export default DualScreenClosedAlert;
