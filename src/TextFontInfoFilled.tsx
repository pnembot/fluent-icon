import type { SVGProps } from "react";

export function TextFontInfoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.193 3.754a.75.75 0 0 0-1.41-.02L2.8 14.234a.75.75 0 1 0 1.402.532l.86-2.266h3.03A5.46 5.46 0 0 1 8.6 11H5.63l1.824-4.805l1.476 4.244a5.532 5.532 0 0 1 1.154-1.25L8.193 3.755Zm5.307 7.121a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25Zm0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5Zm0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Z"
      />
    </svg>
  );
}
export default TextFontInfoFilled;
