import type { SVGProps } from "react";

export function GuardianFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM10.732 9A2 2 0 0 0 9 8H4a2 2 0 0 0-2 2v2.5a1 1 0 1 0 2 0v4.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 2.5 0V12.5a1 1 0 1 0 2 0V10a1.99 1.99 0 0 0-.268-1ZM14 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-3 6.232a2 2 0 0 0 1-1.732V10c0-.35-.06-.687-.17-1H16a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0v3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 1 1-2.5 0v-2.518Z"
      />
    </svg>
  );
}
export default GuardianFilled;
