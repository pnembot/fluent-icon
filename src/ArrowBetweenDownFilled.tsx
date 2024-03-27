import type { SVGProps } from "react";

export function ArrowBetweenDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 1.75a.75.75 0 0 0-1.5 0v.5C3.5 3.216 4.284 4 5.25 4h9A1.75 1.75 0 0 0 16 2.25v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-9A.25.25 0 0 1 5 2.25v-.5ZM9.75 5a.75.75 0 0 1 .75.75v6.69l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.44V5.75A.75.75 0 0 1 9.75 5ZM3.5 17.75c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
      />
    </svg>
  );
}
export default ArrowBetweenDownFilled;
