import type { SVGProps } from "react";

export function TextIndentIncreaseRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 4.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .75-.75ZM13.25 9a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5Zm0 5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5Zm3.72-6.28a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5Z"
      />
    </svg>
  );
}
export default TextIndentIncreaseRtlFilled;
