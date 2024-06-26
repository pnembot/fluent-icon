import type { SVGProps } from "react";

export function TextAlignDistributedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.78 6.28a.75.75 0 0 0 0-1.06L4.56 5h12.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06 0ZM18 9.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 .75.75ZM2.75 13.5h12.69l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H2.75a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TextAlignDistributedFilled;
