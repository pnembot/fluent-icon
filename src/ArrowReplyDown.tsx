import type { SVGProps } from "react";

export function ArrowReplyDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m3.707 10.998l3.39-3.39a.5.5 0 0 0-.639-.764L6.39 6.9l-4.243 4.243a.5.5 0 0 0-.057.638l.057.07l4.243 4.242a.5.5 0 0 0 .765-.638l-.058-.07l-3.389-3.388H10a7.5 7.5 0 0 0 7.496-7.258l.004-.242a.5.5 0 0 0-1 0a6.5 6.5 0 0 1-6.267 6.495l-.233.005H3.707l3.39-3.39l-3.39 3.39Z"
      />
    </svg>
  );
}
export default ArrowReplyDown;
