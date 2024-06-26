import type { SVGProps } from "react";

export function AutoFitWidthFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 4.25a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm-14.5 0a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm1.72 6.03l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06Z"
      />
    </svg>
  );
}
export default AutoFitWidthFilled;
