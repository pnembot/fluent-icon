import type { SVGProps } from "react";

export function ArrowSyncCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.414 3.635a.5.5 0 0 0 0-.707L9.293.807a.5.5 0 0 0-.707.707l.997.997a7.5 7.5 0 0 0-4.075 13.495a.5.5 0 0 0 .6-.8a6.5 6.5 0 0 1 5.29-11.554l.016-.017ZM8.586 16.363l.016-.016c.408.09.831.14 1.264.15l-.006.006a.502.502 0 0 1 .074-.004a6.5 6.5 0 0 0 3.959-11.706a.5.5 0 1 1 .6-.8a7.5 7.5 0 0 1-4.075 13.495l.996.996a.5.5 0 1 1-.707.707l-2.121-2.12a.5.5 0 0 1 0-.708Zm3.768-8.218a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L9 10.792l2.646-2.647a.5.5 0 0 1 .708 0ZM5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
}
export default ArrowSyncCheckmark;
