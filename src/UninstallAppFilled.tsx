import type { SVGProps } from "react";

export function UninstallAppFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3h4.75a1.5 1.5 0 0 1 1.5 1.5v4.75h4.75a1.5 1.5 0 0 1 1.5 1.5v4.75a1.5 1.5 0 0 1-1.5 1.5h-11Zm11-6.25h-4.75v4.75h4.75v-4.75Zm-6.25 0H4.5v4.75h4.75v-4.75Zm0-1.5V4.5H4.5v4.75h4.75Zm5.03-2.47a.75.75 0 1 1-1.06-1.06l1.22-1.22l-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.22 1.22l1.22-1.22a.75.75 0 1 1 1.06 1.06L16.56 4.5l1.22 1.22a.75.75 0 0 1-1.06 1.06L15.5 5.56l-1.22 1.22Z"
      />
    </svg>
  );
}
export default UninstallAppFilled;
