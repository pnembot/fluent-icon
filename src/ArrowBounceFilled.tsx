import type { SVGProps } from "react";

export function ArrowBounceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 6a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V8.56l6.47 6.47a.75.75 0 0 0 1.06 0l6.754-6.754a.75.75 0 0 0-1.06-1.06L10.5 13.439L4.56 7.5h4.69a.75.75 0 0 0 0-1.5h-6.5Z"
      />
    </svg>
  );
}
export default ArrowBounceFilled;
