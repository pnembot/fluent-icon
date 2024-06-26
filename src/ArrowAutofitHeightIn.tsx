import type { SVGProps } from "react";

export function ArrowAutofitHeightIn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.854 7.854l2-2a.5.5 0 0 0-.708-.708L15 6.293V2.5a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0ZM3 5a2 2 0 0 1 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.854 9.146l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L14 13.707V17.5a.5.5 0 0 0 1 0v-3.793l1.146 1.147a.5.5 0 0 0 .708-.708Z"
      />
    </svg>
  );
}
export default ArrowAutofitHeightIn;
