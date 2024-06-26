import type { SVGProps } from "react";

export function TabDesktopImageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.496 3a2.5 2.5 0 0 0-2.5 2.5v2.839A3.486 3.486 0 0 1 4.5 8h4a3.5 3.5 0 0 1 3.5 3.5v4c0 .537-.12 1.045-.337 1.5h2.833a2.5 2.5 0 0 0 2.5-2.5V7h-7.5a1.5 1.5 0 0 1-1.5-1.5V3h-2.5Zm3.5 0v2.5a.5.5 0 0 0 .5.5h7.5v-.5a2.5 2.5 0 0 0-2.5-2.5h-5.5ZM2 11.5A2.5 2.5 0 0 1 4.5 9h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379L7.56 13.854a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 2 15.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414L6.854 14.56a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default TabDesktopImageFilled;
