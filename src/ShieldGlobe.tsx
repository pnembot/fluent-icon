import type { SVGProps } from "react";

export function ShieldGlobe(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0C14.693 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421ZM4 5.428a15.969 15.969 0 0 0 5.6-2.082l.4-.249l.4.249A15.969 15.969 0 0 0 16 5.428V9.5c0 3.392-1.968 5.863-6 7.463c-4.032-1.6-6-4.071-6-7.463V5.428Zm8.959 5.072h-.974c-.05.789-.213 1.506-.458 2.083A3.002 3.002 0 0 0 12.96 10.5Zm0-1a3.002 3.002 0 0 0-1.432-2.083c.245.577.408 1.295.458 2.083h.974Zm-1.977 0c-.054-.767-.232-1.42-.462-1.881c-.14-.279-.28-.45-.387-.541A.425.425 0 0 0 10.005 7a.025.025 0 0 0-.01 0a.426.426 0 0 0-.127.077c-.108.091-.248.262-.388.54c-.23.461-.408 1.115-.462 1.882h1.964Zm-1.964 1c.054.767.232 1.42.462 1.881c.14.279.28.45.387.541a.424.424 0 0 0 .128.077a.026.026 0 0 0 .01 0l.02-.006a.423.423 0 0 0 .108-.07c.108-.092.248-.263.387-.542c.23-.46.408-1.114.462-1.881H9.018Zm-1.003 0h-.974a3.003 3.003 0 0 0 1.432 2.083c-.244-.577-.408-1.294-.458-2.083Zm0-1c.05-.788.214-1.506.458-2.083A3.002 3.002 0 0 0 7.04 9.5h.974ZM14 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"
      />
    </svg>
  );
}
export default ShieldGlobe;
