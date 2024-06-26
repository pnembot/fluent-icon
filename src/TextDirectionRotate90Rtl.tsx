import type { SVGProps } from "react";

export function TextDirectionRotate90Rtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 13.5a.5.5 0 0 1-.324.468l-8 3a.5.5 0 1 1-.351-.936L11 15.028v-3.057l-2.675-1.003a.5.5 0 1 1 .35-.936l8 3A.5.5 0 0 1 17 13.5Zm-1.924 0L12 12.346v2.307l3.076-1.153ZM5 16.5a.5.5 0 1 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2A.499.499 0 0 0 5.503 3h-.006a.498.498 0 0 0-.35.146l-2 2a.5.5 0 1 0 .707.707L5 4.707V16.5Zm8-7a.5.5 0 0 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.707L13 4.707V9.5Z"
      />
    </svg>
  );
}
export default TextDirectionRotate90Rtl;
