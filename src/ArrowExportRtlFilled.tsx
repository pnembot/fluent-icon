import type { SVGProps } from "react";

export function ArrowExportRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.25 3.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75ZM15 10a.75.75 0 0 0-.75-.75H4.06l2.72-2.72a.75.75 0 0 0-1.06-1.06L1.723 9.466a.761.761 0 0 0-.156.223a.747.747 0 0 0 .156.845L5.72 14.53a.75.75 0 1 0 1.06-1.06l-2.72-2.72h10.19A.75.75 0 0 0 15 10Z"
      />
    </svg>
  );
}
export default ArrowExportRtlFilled;
