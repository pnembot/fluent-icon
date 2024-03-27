import type { SVGProps } from "react";

export function TabDesktopArrowLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H10.4c.162-.317.294-.651.393-1h3.703a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5V4h-2.5a1.5 1.5 0 0 0-1.5 1.5v3.708a5.463 5.463 0 0 0-1 .394V5.5Zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5h6.5ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-6.853-.354l-.003.003a.498.498 0 0 0-.144.348v.006a.498.498 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default TabDesktopArrowLeft;
