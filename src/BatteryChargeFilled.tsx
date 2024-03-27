import type { SVGProps } from "react";

export function BatteryChargeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.625 5l3.875.006a2.5 2.5 0 0 1 2.496 2.352l.004.147v.833h1.167a.83.83 0 0 1 .827.731L18 9.17v1.666a.832.832 0 0 1-.721.826l-.112.007H16v.833a2.5 2.5 0 0 1-2.353 2.494l-.147.005l-6.38-.006a.625.625 0 0 1-.619-.54l-.005-.084v-3.748c0-.317.235-.578.54-.62l.085-.005h.731c.597 0 1.087-.455 1.143-1.037L9 8.851V5.625c0-.316.235-.577.54-.619l.085-.005l3.875.005L9.625 5ZM6.291 3.34l.085-.006c.316 0 .578.235.619.54l.006.085L7 5.001l.375.005c.345 0 .625.28.625.625v1.912c0 .805-.653 1.458-1.458 1.458h-.918l.001 5.375a.625.625 0 0 1-.54.619L5 15a.625.625 0 0 1-.62-.54l-.005-.085V9h-.917A1.458 1.458 0 0 1 2 7.543V5.631c0-.345.28-.625.625-.625H3V3.965c0-.317.235-.578.54-.62l.085-.005c.316 0 .578.235.62.54l.005.085v1.041l1.5-.005V3.959c0-.316.236-.578.54-.62l.086-.005l-.085.006Z"
      />
    </svg>
  );
}
export default BatteryChargeFilled;
