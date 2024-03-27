import type { SVGProps } from "react";

export function TextIndentDecreaseRtlRotate270(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.146 4.854a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708L10 3.707l1.146 1.147ZM6 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-5.5 0a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0v-10Z"
      />
    </svg>
  );
}
export default TextIndentDecreaseRtlRotate270;
