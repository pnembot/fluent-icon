import type { SVGProps } from "react";

export function ShareAndroid(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 5.502a2.502 2.502 0 1 1 .531 1.541L7.915 9.351a2.504 2.504 0 0 1 0 1.297l4.618 2.31a2.5 2.5 0 1 1-.448.894l-4.618-2.31a2.5 2.5 0 1 1 0-3.086l4.617-2.307A2.505 2.505 0 0 1 12 5.502ZM14.502 4a1.501 1.501 0 1 0 0 3.003a1.501 1.501 0 0 0 0-3.003Zm-.002 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM4 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
      />
    </svg>
  );
}
export default ShareAndroid;
