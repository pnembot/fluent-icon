import type { SVGProps } from "react";

export function SportAmericanFootballFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.936 2.644C7.987 3.477 5.92 5.05 4.52 6.957C3.618 8.185 3.004 9.54 2.608 10.9l6.596 6.596c2.742-.74 4.712-2.23 6.083-4.08c.987-1.33 1.653-2.831 2.078-4.345l-6.429-6.428Zm.918 5.502a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0Zm5.787-.212c.264-1.29.368-2.558.362-3.708c-.006-1.268-1.06-2.242-2.3-2.226a19.47 19.47 0 0 0-3.628.368l5.566 5.566Zm-9.593 9.82l-5.72-5.72a16.095 16.095 0 0 0-.318 3.81c.043 1.18 1.001 2.084 2.153 2.138c1.426.066 2.717-.018 3.885-.227Z"
      />
    </svg>
  );
}
export default SportAmericanFootballFilled;
