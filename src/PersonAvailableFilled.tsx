import type { SVGProps } from "react";

export function PersonAvailableFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-3 7c0-1.113.903-2 2.009-2h6.248A5.477 5.477 0 0 0 9 14.5c0 1.303.453 2.5 1.21 3.443c-.395.038-.8.057-1.21.057c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default PersonAvailableFilled;
