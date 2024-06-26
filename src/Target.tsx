import type { SVGProps } from "react";

export function Target(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-8 4a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14Z"
      />
    </svg>
  );
}
export default Target;
