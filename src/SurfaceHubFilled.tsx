import type { SVGProps } from "react";

export function SurfaceHubFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.259 2a.5.5 0 0 0-.498.453l-.759 8A.5.5 0 0 0 4.5 11h2.423l-.918 6.43a.5.5 0 0 0 .99.14L7.362 15h2.99l-.347 2.43a.5.5 0 0 0 .99.14l.367-2.57h2.276l.367 2.57a.5.5 0 0 0 .99-.14L14.077 11h.664a.5.5 0 0 0 .498-.453l.759-8A.5.5 0 0 0 15.5 2H5.259Zm8.236 12h-1.99l.429-3h1.132l.429 3Zm-3 0h-2.99l.429-3h2.99l-.43 3Z"
      />
    </svg>
  );
}
export default SurfaceHubFilled;
