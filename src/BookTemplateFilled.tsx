import type { SVGProps } from "react";

export function BookTemplateFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 1A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H8V9H5.5a.5.5 0 0 1 0-1h2.67a3.01 3.01 0 0 1 .594-1H5.5a.5.5 0 0 1 0-1H16V3.5A2.5 2.5 0 0 0 13.5 1h-9ZM5 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1v-.003h7.5a.5.5 0 0 0 .5-.5V9Zm-8 6.997V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6.997h-7Z"
      />
    </svg>
  );
}
export default BookTemplateFilled;
