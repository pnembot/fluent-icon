import type { SVGProps } from "react";

export function BorderBottomDoubleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm-2.547.853c-.387.151-.696.46-.849.846a.75.75 0 1 1-1.413-.492h-.005a3.009 3.009 0 0 1 1.77-1.77v.004a.75.75 0 1 1 .497 1.412Zm9.944.846a1.505 1.505 0 0 0-.938-.878a.75.75 0 0 1 .586-1.38v-.005a3.009 3.009 0 0 1 1.77 1.77h-.005a.75.75 0 1 1-1.413.493ZM3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm11.75-.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-12.5 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 13a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"
      />
    </svg>
  );
}
export default BorderBottomDoubleFilled;
