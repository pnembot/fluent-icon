import type { SVGProps } from "react";

export function KeyboardShiftUppercaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.144 2.53a1.5 1.5 0 0 0-2.288 0l-6.617 7.803a1 1 0 0 0 .763 1.647H6v3.017a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11.98h2.996a1 1 0 0 0 .763-1.647L11.144 2.53ZM6.5 17a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default KeyboardShiftUppercaseFilled;
