import type { SVGProps } from "react";

export function ArrowAutofitHeightInFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.78 7.78l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V2.75a.75.75 0 0 0-1.5 0v2.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0ZM3 5a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5Zm13.78 9.22l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.69a.75.75 0 0 0 1.5 0v-2.69l.72.72a.75.75 0 1 0 1.06-1.06Z"
      />
    </svg>
  );
}
export default ArrowAutofitHeightInFilled;
