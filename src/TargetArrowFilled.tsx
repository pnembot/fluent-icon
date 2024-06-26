import type { SVGProps } from "react";

export function TargetArrowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.603 7.519a7.999 7.999 0 1 1-5.117-5.126L11.438 3.44c-.058.057-.11.12-.158.185a6.5 6.5 0 1 0 5.088 5.098a1.5 1.5 0 0 0 .192-.162l1.042-1.042ZM14.898 9A5 5 0 1 1 11 5.1v1.546A3.5 3.5 0 1 0 13.353 9h1.545Zm-4.9 2.5a1.5 1.5 0 0 0 1.45-1.887L13.03 8.03l.03-.03h2.44a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.853-.354l-2 2A.5.5 0 0 0 12 4.5v2.44a.763.763 0 0 0-.03.03l-1.582 1.58A1.501 1.501 0 0 0 8.498 10a1.5 1.5 0 0 0 1.5 1.5Z"
      />
    </svg>
  );
}
export default TargetArrowFilled;
