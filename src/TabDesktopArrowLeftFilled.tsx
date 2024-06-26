import type { SVGProps } from "react";

export function TabDesktopArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.496 3a2.5 2.5 0 0 0-2.5 2.5v4.102A5.5 5.5 0 0 1 10.4 17h4.096a2.5 2.5 0 0 0 2.5-2.5V7h-7.5a1.5 1.5 0 0 1-1.5-1.5V3h-2.5Zm3.5 0v2.5a.5.5 0 0 0 .5.5h7.5v-.5a2.5 2.5 0 0 0-2.5-2.5h-5.5ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-6.853-.354l-.003.003a.498.498 0 0 0-.144.348v.006a.498.498 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default TabDesktopArrowLeftFilled;
