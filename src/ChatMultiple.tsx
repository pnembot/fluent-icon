import type { SVGProps } from "react";

export function ChatMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.538 2a6.5 6.5 0 0 0-5.674 9.672l-.796 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.539 2Zm-5.5 6.5a5.5 5.5 0 1 1 2.998 4.9l-.174-.09l-2.86.801l.969-2.536l-.128-.21A5.472 5.472 0 0 1 3.038 8.5Zm8.463 9.5a6.485 6.485 0 0 1-4.927-2.26a7.456 7.456 0 0 0 1.76.257A5.475 5.475 0 0 0 11.5 17c.902 0 1.752-.217 2.502-.6l.174-.09l2.86.801l-.969-2.536l.128-.21c.51-.834.805-1.814.805-2.865a5.474 5.474 0 0 0-.964-3.11a7.51 7.51 0 0 0-.235-1.763A6.484 6.484 0 0 1 18 11.5c0 1.151-.3 2.233-.825 3.172l.795 2.082a1 1 0 0 1-1.204 1.32l-2.487-.697c-.843.4-1.786.623-2.78.623Z"
      />
    </svg>
  );
}
export default ChatMultiple;
