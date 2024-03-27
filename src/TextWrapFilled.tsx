import type { SVGProps } from "react";

export function TextWrapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm0 5a.75.75 0 0 1 .75-.75h13a3.25 3.25 0 0 1 0 6.5h-3.399l.225.27a.75.75 0 0 1-1.152.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 1.152.96l-.225.27h3.399a1.75 1.75 0 1 0 0-3.5h-13A.75.75 0 0 1 2 9.25Zm0 5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default TextWrapFilled;
