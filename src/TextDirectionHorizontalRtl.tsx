import type { SVGProps } from "react";

export function TextDirectionHorizontalRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 3a.5.5 0 0 0-.468.324l-3 8a.5.5 0 0 0 .936.352L11.972 9h3.056l1.004 2.676a.5.5 0 0 0 .936-.352l-3-8A.5.5 0 0 0 13.5 3Zm0 1.924L14.653 8h-2.306L13.5 4.924Zm-8.354-.778a.5.5 0 1 1 .708.708L4.707 6H9.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2Zm0 8a.5.5 0 0 1 .708.708L4.707 14H16.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2Z"
      />
    </svg>
  );
}
export default TextDirectionHorizontalRtl;
