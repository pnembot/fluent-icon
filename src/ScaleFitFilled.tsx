import type { SVGProps } from "react";

export function ScaleFitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.998v8.005a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.998a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11.124 6.082a.5.5 0 0 1 .047-.706l.998-.873H11.5a.5.5 0 0 1 0-1h2.67l-1-.874a.5.5 0 0 1 .66-.753l2 1.75a.5.5 0 0 1 0 .753l-2 1.75a.5.5 0 0 1-.706-.047ZM6.876 7.92a.5.5 0 0 1-.047.706l-.998.873H8.5a.5.5 0 0 1 0 1H5.83l1 .874a.5.5 0 0 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047Z"
      />
    </svg>
  );
}
export default ScaleFitFilled;
