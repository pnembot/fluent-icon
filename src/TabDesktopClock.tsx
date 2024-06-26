import type { SVGProps } from "react";

export function TabDesktopClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-4.1c.162-.317.294-.651.393-1H14.5a1.5 1.5 0 0 0 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v3.707c-.349.099-.683.23-1 .393V5.5ZM16 6v-.5A1.5 1.5 0 0 0 14.5 4H9v1.5a.5.5 0 0 0 .5.5H16Zm-6 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM5.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default TabDesktopClock;
