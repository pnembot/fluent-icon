import type { SVGProps } from "react";

export function SlideEraser(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6c0-.343.078-.686.234-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.235c.213.106.413.248.59.425l.41.41V6a2 2 0 0 0-2-2H4Zm11.116 7.366a1.25 1.25 0 0 1 1.767 0l1.75 1.75a1.25 1.25 0 0 1 0 1.768l-2.575 2.575l-3.518-3.517l2.576-2.576ZM11.94 14.54l-.575.576a1.25 1.25 0 0 0 0 1.768l1.75 1.749a1.25 1.25 0 0 0 1.767 0l.577-.576l-3.519-3.517Z"
      />
    </svg>
  );
}
export default SlideEraser;
