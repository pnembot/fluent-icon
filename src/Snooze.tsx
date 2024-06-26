import type { SVGProps } from "react";

export function Snooze(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 4a.5.5 0 0 0 0 1h4.028l-4.435 6.21a.5.5 0 0 0 .407.79h5a.5.5 0 0 0 0-1h-4.028l4.435-6.21A.5.5 0 0 0 15.5 4h-5Zm-6 6a.5.5 0 0 0 0 1h2.96l-3.35 4.188A.5.5 0 0 0 4.5 16h4a.5.5 0 0 0 0-1H5.54l3.35-4.188A.5.5 0 0 0 8.5 10h-4Z"
      />
    </svg>
  );
}
export default Snooze;
