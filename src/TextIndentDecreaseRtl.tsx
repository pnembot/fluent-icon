import type { SVGProps } from "react";

export function TextIndentDecreaseRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm-3 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM7 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm9.453-6.764a.5.5 0 1 0-.707.708l1.06 1.06l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.707l-1.414-1.415Z"
      />
    </svg>
  );
}
export default TextIndentDecreaseRtl;
