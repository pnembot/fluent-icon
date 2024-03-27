import type { SVGProps } from "react";

export function PersonWalkingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-2.517.184c.262-.053.517.068.731.227a2.999 2.999 0 0 0 2.704.446c.165-.053.34-.086.507-.046c.467.112.892.37 1.205.747l1.26 1.508a.5.5 0 0 0 .227.154l1.026.34a1.25 1.25 0 0 1-.785 2.373l-1.5-.496a1.25 1.25 0 0 1-.567-.386l-.491-.588a.5.5 0 0 0-.858.163l-.15.447a.5.5 0 0 0 .058.434l1.053 1.594c.205.31.33.666.364 1.036l.227 2.5a1.25 1.25 0 1 1-2.49.226l-.21-2.311a.5.5 0 0 0-.08-.23l-.724-1.095a.5.5 0 0 0-.875.075l-1.72 3.947a1.25 1.25 0 1 1-2.291-.998L7.957 9.7a.5.5 0 0 0-.575-.686l-.12.029a.25.25 0 0 0-.171.142l-.503 1.132l-.013.028l-.445.94a1.25 1.25 0 0 1-2.26-1.071l.44-.926l.496-1.118a2.75 2.75 0 0 1 1.876-1.56l1.725-.41l.076-.017Z"
      />
    </svg>
  );
}
export default PersonWalkingFilled;
