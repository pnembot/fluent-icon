import type { SVGProps } from "react";

export function TextLineSpacing(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 3.707V8.5a.5.5 0 0 0 1 0V3.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.499.499 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L15 3.707ZM2 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM15 16.293V11.5a.5.5 0 0 1 1 0v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L15 16.293Z"
      />
    </svg>
  );
}
export default TextLineSpacing;
