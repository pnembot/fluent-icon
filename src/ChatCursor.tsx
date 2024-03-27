import type { SVGProps } from "react";

export function ChatCursor(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779C5.88 12.707 6.906 13 8 13c.34 0 .675-.028 1-.083V11.9a5.022 5.022 0 0 1-3.675-.675a.5.5 0 0 0-.426-.052l-1.658.553l.51-1.781a.5.5 0 0 0-.052-.393a5 5 0 1 1 9.148-1.322l.834.706A6 6 0 0 0 8 1Zm2 7.746v9.003c0 .74.96 1.033 1.373.418l1.978-2.946a.5.5 0 0 1 .415-.221h3.487c.698 0 1.018-.871.484-1.322l-6.502-5.504A.75.75 0 0 0 10 8.746Z"
      />
    </svg>
  );
}
export default ChatCursor;
