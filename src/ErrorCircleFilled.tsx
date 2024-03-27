import type { SVGProps } from "react";

export function ErrorCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 10.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5ZM10 6a.5.5 0 0 0-.492.41L9.5 6.5V11l.008.09a.5.5 0 0 0 .984 0L10.5 11V6.5l-.008-.09A.5.5 0 0 0 10 6Z"
      />
    </svg>
  );
}
export default ErrorCircleFilled;
