import type { SVGProps } from "react";

export function PhoneChat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.421 17H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.022a5.569 5.569 0 0 1 1 0V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.117l.304-1Zm5.079 2a4.5 4.5 0 1 0-3.937-2.318l-.544 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.48 4.48 0 0 0 14.5 19ZM12 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z"
      />
    </svg>
  );
}
export default PhoneChat;
