import type { SVGProps } from "react";

export function ChatMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.538 2a6.5 6.5 0 0 0-5.674 9.672l-.796 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.539 2ZM6.574 15.74A6.485 6.485 0 0 0 11.501 18c.993 0 1.936-.223 2.78-.623l2.486.697a1 1 0 0 0 1.204-1.32l-.795-2.082A6.494 6.494 0 0 0 18 11.5c0-1.94-.85-3.682-2.199-4.873a7.51 7.51 0 0 1 .235 1.762c.608.885.964 1.957.964 3.111c0 1.05-.294 2.031-.805 2.866l-.128.21l.97 2.535l-2.86-.8l-.175.088c-.75.384-1.6.601-2.502.601a5.475 5.475 0 0 1-3.167-1.003a7.499 7.499 0 0 1-1.76-.257Z"
      />
    </svg>
  );
}
export default ChatMultipleFilled;
