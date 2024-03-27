import type { SVGProps } from "react";

export function DesktopCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 6.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708ZM14.5 11c1.33 0 2.55-.472 3.5-1.257V13.5a1.5 1.5 0 0 1-1.5 1.5H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H3.5A1.5 1.5 0 0 1 2 13.5v-10A1.5 1.5 0 0 1 3.5 2h6.757a5.5 5.5 0 0 0 4.243 9ZM12 15H8v2h4v-2Z"
      />
    </svg>
  );
}
export default DesktopCheckmarkFilled;
