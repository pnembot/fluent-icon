import type { SVGProps } from "react";

export function SlideTransition(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM12 5v10H9V5h3Zm1 10V5h2.25c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15H13Zm-5 0H6V5h2v10ZM5 5v10h-.25A1.75 1.75 0 0 1 3 13.25v-6.5C3 5.784 3.784 5 4.75 5H5Z"
      />
    </svg>
  );
}
export default SlideTransition;
