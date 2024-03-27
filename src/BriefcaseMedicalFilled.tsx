import type { SVGProps } from "react";

export function BriefcaseMedicalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 5V3.75C7 2.784 7.784 2 8.75 2h2.5c.966 0 1.75.784 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-6A2.5 2.5 0 0 1 5.5 5H7Zm1 0h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75V5Zm2.5 3a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2V8Z"
      />
    </svg>
  );
}
export default BriefcaseMedicalFilled;
