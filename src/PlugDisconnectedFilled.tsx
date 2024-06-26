import type { SVGProps } from "react";

export function PlugDisconnectedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.78 2.22a.75.75 0 0 1 0 1.06l-1.445 1.446a4.037 4.037 0 0 1-.481 5.127l-.3.3l-.003.003l-.309.309a1.05 1.05 0 0 1-1.484 0L9.535 6.242a1.05 1.05 0 0 1 0-1.485l.611-.61a4.04 4.04 0 0 1 5.128-.481L16.72 2.22a.75.75 0 0 1 1.06 0Zm-9 6.25a.75.75 0 0 1 0 1.06l-1.27 1.272l1.69 1.69l1.27-1.272a.75.75 0 1 1 1.061 1.06l-1.276 1.277a1.49 1.49 0 0 1-.1 1.997l-.3.3a4.037 4.037 0 0 1-5.128.48L3.28 17.78a.75.75 0 0 1-1.06-1.06l1.445-1.446a4.037 4.037 0 0 1 .481-5.127l.3-.3a1.49 1.49 0 0 1 1.997-.1L7.72 8.47a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
}
export default PlugDisconnectedFilled;
