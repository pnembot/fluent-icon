import type { SVGProps } from "react";

export function HdrOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.416 1.415A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.543l1.853 1.854a.5.5 0 0 0 .708-.708l-15-15ZM14.293 15H4.75A1.75 1.75 0 0 1 3 13.25v-6.5a1.75 1.75 0 0 1 1.341-1.702l2.717 2.717A.498.498 0 0 0 7 8v1.5H5V8a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-1.5h2V12a.5.5 0 0 0 1 0V8.707l1 1V12a.5.5 0 0 0 .5.5h.25c.569 0 1.088-.21 1.484-.559L14.293 15ZM10 10.707l.524.524c-.15.12-.329.204-.524.244v-.768ZM9.621 7.5L12 9.879V9.75A2.25 2.25 0 0 0 9.75 7.5h-.129ZM13 10.879l1 1V10.5h.403l.629 1.676a.5.5 0 0 0 .936-.352l-.6-1.6A1.5 1.5 0 0 0 14.5 7.5h-1a.5.5 0 0 0-.5.5v2.879Zm4 2.371c0 .452-.172.865-.453 1.175l.707.708A2.74 2.74 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H6.121l1 1h8.129c.966 0 1.75.784 1.75 1.75v6.5ZM14 9.5v-1h.5a.5.5 0 0 1 0 1H14Z"
      />
    </svg>
  );
}
export default HdrOff;
