import type { SVGProps } from "react";

export function Send(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.184 2.112a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 0 1 0 .895l-15 7.5a.5.5 0 0 1-.707-.576L3.983 10L2.017 2.629a.5.5 0 0 1 .167-.517Zm2.7 8.388L3.27 16.556L16.382 10L3.269 3.444L4.884 9.5H11.5a.5.5 0 1 1 0 1H4.884Z"
      />
    </svg>
  );
}
export default Send;
