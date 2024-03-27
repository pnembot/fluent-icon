import type { SVGProps } from "react";

export function ArrowShuffleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.78 3.72a.75.75 0 1 0-1.06 1.06l.753.754c-3.09.278-4.879 2.194-6.474 3.904l-.047.05C7.188 11.378 5.64 13 2.75 13a.75.75 0 0 0 0 1.5c3.577 0 5.526-2.09 7.251-3.938l.047-.05c1.58-1.693 2.986-3.17 5.34-3.46l-.668.668a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2ZM2.75 5.5c2.779 0 4.575 1.261 6.048 2.69c-.166.175-.327.347-.483.515l-.094.101l-.451.48C6.42 7.97 4.987 7 2.75 7a.75.75 0 1 1 0-1.5Zm12.723 8.966c-2.345-.21-3.94-1.365-5.27-2.656l.482-.515l.094-.1c.154-.166.304-.326.451-.48c1.169 1.137 2.399 2.017 4.158 2.234l-.668-.669a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.753-.754Z"
      />
    </svg>
  );
}
export default ArrowShuffleFilled;
