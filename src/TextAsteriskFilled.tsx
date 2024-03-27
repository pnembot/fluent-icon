import type { SVGProps } from "react";

export function TextAsteriskFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.6 2.5a.6.6 0 1 0-1.2 0v6.052l-4.279-4.28a.6.6 0 1 0-.848.85L8.552 9.4H2.5a.6.6 0 1 0 0 1.2h6.052l-4.279 4.28a.6.6 0 0 0 .849.848L9.4 11.449V17.5a.6.6 0 1 0 1.2 0v-6.05l4.28 4.279a.6.6 0 0 0 .848-.849l-4.279-4.28H17.5a.6.6 0 1 0 0-1.2h-6.05l4.278-4.279a.6.6 0 0 0-.848-.848L10.6 8.552V2.5Z"
      />
    </svg>
  );
}
export default TextAsteriskFilled;
