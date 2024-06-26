import type { SVGProps } from "react";

export function ArrowSyncCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.414 3.635a.5.5 0 0 0 0-.707L9.293.807a.5.5 0 0 0-.707.707l.997.997a7.5 7.5 0 0 0-4.075 13.495a.5.5 0 0 0 .6-.8a6.5 6.5 0 0 1 5.29-11.554l.016-.017ZM8.586 16.363l.016-.016c.408.09.831.14 1.264.15l-.006.006a.516.516 0 0 1 .074-.004a6.5 6.5 0 0 0 3.959-11.706a.5.5 0 1 1 .6-.8a7.5 7.5 0 0 1-4.075 13.495l.996.996a.5.5 0 1 1-.707.707l-2.121-2.12a.5.5 0 0 1 0-.708ZM15 9.999a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm-2.646-1.854a.5.5 0 0 0-.708 0L9 10.792L7.854 9.645a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default ArrowSyncCheckmarkFilled;
