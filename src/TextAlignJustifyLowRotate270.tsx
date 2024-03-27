import type { SVGProps } from "react";

export function TextAlignJustifyLowRotate270(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm4.5 6.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z"
      />
    </svg>
  );
}
export default TextAlignJustifyLowRotate270;
