import type { SVGProps } from "react";

export function TextTTag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V4H8.5v8H9a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1h.5V4H5v.5a.5.5 0 0 1-1 0v-1Zm.354 3.146a.5.5 0 0 1 0 .708L2.207 9.5l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0Zm10.5 2.5l-2.5-2.5a.5.5 0 0 0-.708.708L13.793 9.5l-2.147 2.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default TextTTag;
