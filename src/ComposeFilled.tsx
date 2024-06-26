import type { SVGProps } from "react";

export function ComposeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.78 3.28a.75.75 0 1 0-1.06-1.06l-7.5 7.505L9 11l1.28-.215l7.5-7.505ZM5.75 3A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17h8.5A2.75 2.75 0 0 0 17 14.25V8.748a.75.75 0 0 0-1.5 0v5.502c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25h5.49a.75.75 0 0 0 0-1.5H5.75Z"
      />
    </svg>
  );
}
export default ComposeFilled;
