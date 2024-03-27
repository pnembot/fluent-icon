import type { SVGProps } from "react";

export function IncognitoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.085 8.755c4.503-.673 7.327-.673 11.83 0a96.062 96.062 0 0 0 .533-.93a1.416 1.416 0 0 0-.077-.222l-1.65-3.712A1.5 1.5 0 0 0 13.35 3h-6.7a1.5 1.5 0 0 0-1.37.89L3.63 7.604c-.032.07-.064.143-.089.223c-.363.056-.737.116-1.123.18a.5.5 0 0 0 .164.987a90.9 90.9 0 0 1 1.503-.238ZM3 13.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0ZM5.5 10a3.5 3.5 0 1 0 3.465 4h2.07a3.501 3.501 0 1 0 0-1h-2.07A3.5 3.5 0 0 0 5.5 10Zm6.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z"
      />
    </svg>
  );
}
export default IncognitoFilled;
