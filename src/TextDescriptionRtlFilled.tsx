import type { SVGProps } from "react";

export function TextDescriptionRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.25 4.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h14.5Zm0 3a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h14.5Zm.75 3.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 .75-.75Zm-.75 2.25a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Z"
      />
    </svg>
  );
}
export default TextDescriptionRtlFilled;
