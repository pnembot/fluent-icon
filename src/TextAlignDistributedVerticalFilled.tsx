import type { SVGProps } from "react";

export function TextAlignDistributedVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.03 14.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V2.75a.75.75 0 0 0-1.5 0v12.69l-.72-.72ZM10 18a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5A.75.75 0 0 1 10 18Zm8.03-12.72a.75.75 0 0 1-1.06 0l-.72-.72v12.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06Z"
      />
    </svg>
  );
}
export default TextAlignDistributedVerticalFilled;
