import type { SVGProps } from "react";

export function TextParagraphDirectionLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM5.146 7.646a.5.5 0 1 1 .708.708L4.207 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2Z"
      />
    </svg>
  );
}
export default TextParagraphDirectionLeftFilled;
