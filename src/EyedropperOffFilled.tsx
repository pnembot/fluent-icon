import type { SVGProps } from "react";

export function EyedropperOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.793 8.501L2.146 2.854a.5.5 0 1 1 .708-.707l15 15a.5.5 0 0 1-.708.707L11.5 12.208l-4.352 4.353a1.5 1.5 0 0 1-1.061.44h-.481l-2.25.982c-.83.363-1.675-.476-1.32-1.309l.965-2.258v-.501c0-.398.158-.78.44-1.061l4.352-4.353Zm3 3L8.5 9.208l-4.352 4.353a.5.5 0 0 0-.147.354v.604a.5.5 0 0 1-.04.196l-1.005 2.352l2.345-1.025A.5.5 0 0 1 5.5 16h.586a.5.5 0 0 0 .353-.146l4.353-4.353Zm2-2l-.585.585l.707.707l.586-.585l.353.353a1.5 1.5 0 0 0 2.122 0l.585-.586a1.5 1.5 0 0 0 0-2.121l-.353-.353l1.04-1.04a2.621 2.621 0 1 0-3.708-3.707l-1.04 1.04l-.35-.352a1.5 1.5 0 0 0-2.122 0l-.585.586a1.5 1.5 0 0 0 0 2.122l.35.35l-.585.586l.707.707l.586-.585L12.794 9.5Z"
      />
    </svg>
  );
}
export default EyedropperOffFilled;
