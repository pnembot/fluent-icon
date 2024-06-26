import type { SVGProps } from "react";

export function VirtualNetworkToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.844 7.207a.75.75 0 0 0-1.188-.914l-2.5 3.25a.75.75 0 0 0 0 .914l2.5 3.25a.75.75 0 1 0 1.188-.914L2.696 10l2.148-2.793Zm13.114 3.835a2.502 2.502 0 0 0-1.13-1.66l-1.672-2.175a.75.75 0 1 1 1.188-.914l2.5 3.25a.75.75 0 0 1 0 .914l-.523.68a2.485 2.485 0 0 0-.363-.095ZM7 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm2 1v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default VirtualNetworkToolboxFilled;
