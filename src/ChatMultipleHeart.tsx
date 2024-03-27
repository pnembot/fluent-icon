import type { SVGProps } from "react";

export function ChatMultipleHeart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.552 6.488a1.896 1.896 0 0 1 2.68.007l.265.264l.26-.261a1.898 1.898 0 0 1 2.685.007c.742.742.744 1.938.007 2.68l-2.732 2.73a.292.292 0 0 1-.412 0L5.559 9.168a1.896 1.896 0 0 1-.007-2.68ZM2.038 8.5a6.5 6.5 0 1 1 3.721 5.877l-2.487.697a1 1 0 0 1-1.204-1.32l.796-2.082A6.472 6.472 0 0 1 2.038 8.5Zm6.5-5.5a5.5 5.5 0 0 0-4.695 8.366l.128.21l-.97 2.535l2.86-.8l.175.088A5.5 5.5 0 1 0 8.538 3ZM6.574 15.74A6.485 6.485 0 0 0 11.501 18c.993 0 1.936-.223 2.78-.623l2.486.697a1 1 0 0 0 1.204-1.32l-.795-2.082A6.494 6.494 0 0 0 18 11.5c0-1.94-.85-3.682-2.199-4.873a7.51 7.51 0 0 1 .235 1.762c.608.885.964 1.957.964 3.111c0 1.05-.294 2.031-.805 2.866l-.128.21l.97 2.535l-2.86-.8l-.175.088c-.75.384-1.6.601-2.502.601a5.475 5.475 0 0 1-3.167-1.003a7.499 7.499 0 0 1-1.76-.257Z"
      />
    </svg>
  );
}
export default ChatMultipleHeart;
