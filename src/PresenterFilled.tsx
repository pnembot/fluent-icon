import type { SVGProps } from "react";

export function PresenterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.999 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-5 10.784V16.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.716a.5.5 0 0 1 .153-.36l3.703-3.564a.5.5 0 0 0-.347-.86H3.49a.5.5 0 0 0-.346.86l3.702 3.564a.5.5 0 0 1 .154.36ZM8.499 7a1.5 1.5 0 0 0-1.5 1.5V9h6v-.5a1.5 1.5 0 0 0-1.5-1.5h-3Z"
      />
    </svg>
  );
}
export default PresenterFilled;
