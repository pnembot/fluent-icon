import type { SVGProps } from "react";

export function TextColumnTwoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Zm-8 0A.75.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 9 5.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Zm-8 0A.75.75 0 0 0 8.25 8h-4.5a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 9 8.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
}
export default TextColumnTwoFilled;
