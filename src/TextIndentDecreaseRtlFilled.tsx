import type { SVGProps } from "react";

export function TextIndentDecreaseRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.25 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h7.5ZM14 9.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 .75-.75Zm0 5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75Zm1.22-7.03a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  );
}
export default TextIndentDecreaseRtlFilled;
