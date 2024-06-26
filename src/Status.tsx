import type { SVGProps } from "react";

export function Status(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.354 2.647a2.621 2.621 0 0 0-3.707 0l-5.5 5.5a.5.5 0 0 0-.132.232l-1 4a.5.5 0 0 0 .606.606l4-1a.5.5 0 0 0 .233-.131l5.5-5.5a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 0 1 2.293 2.293l-5.403 5.402l-3.057.764l.764-3.057l5.403-5.402ZM10 4c.28 0 .554.02.823.056l.854-.854a7 7 0 1 0 5.121 5.121l-.854.854A6 6 0 1 1 10 4Z"
      />
    </svg>
  );
}
export default Status;
