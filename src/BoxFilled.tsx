import type { SVGProps } from "react";

export function BoxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m10 7.96l3.029-1.21l-7.5-3l-2.586 1.034a1.499 1.499 0 0 0-.364.208L10 7.961ZM2.035 5.853A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.26.104.528.175.8.214V8.838L2.035 5.852Zm8.465 11.88a3.5 3.5 0 0 0 .8-.214l5.757-2.303A1.5 1.5 0 0 0 18 13.822V6.176c0-.11-.012-.219-.035-.324L10.5 8.838v8.894Zm6.921-12.74l-3.046 1.219l-7.5-3L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303a1.5 1.5 0 0 1 .364.208Z"
      />
    </svg>
  );
}
export default BoxFilled;
