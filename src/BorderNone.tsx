import type { SVGProps } from "react";

export function BorderNone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-2.46.553A2.003 2.003 0 0 0 4.052 5.54a.509.509 0 0 1-.6.462a.509.509 0 0 1-.38-.663a3.004 3.004 0 0 1 2.265-2.265a.509.509 0 0 1 .663.38a.509.509 0 0 1-.462.6Zm0 11.894a2.003 2.003 0 0 1-1.487-1.486a.509.509 0 0 0-.6-.463a.509.509 0 0 0-.38.664a3.004 3.004 0 0 0 2.265 2.265a.505.505 0 1 0 .201-.98Zm9.05-12.893a.497.497 0 0 1 .072.02a3.004 3.004 0 0 1 2.265 2.264a.506.506 0 0 1-.38.664a.509.509 0 0 1-.6-.463a2.003 2.003 0 0 0-1.486-1.486a.509.509 0 0 1-.462-.6a.509.509 0 0 1 .592-.4Zm-.13 12.893a2.003 2.003 0 0 0 1.487-1.486a.509.509 0 0 1 .6-.462a.509.509 0 0 1 .38.663a3.004 3.004 0 0 1-2.265 2.265a.509.509 0 0 1-.663-.38a.509.509 0 0 1 .462-.6ZM16 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3ZM3.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default BorderNone;
