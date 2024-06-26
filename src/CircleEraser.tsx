import type { SVGProps } from "react";

export function CircleEraser(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.732 17.173a2.515 2.515 0 0 1-.288-.353A7.01 7.01 0 0 1 3 10a7.008 7.008 0 0 1 7-7a7.01 7.01 0 0 1 6.819 5.441c.126.086.245.183.354.29l.8.8A8 8 0 0 0 10 2a8.009 8.009 0 0 0-8 8a8 8 0 0 0 7.535 7.976l-.803-.803Zm.707-.707a1.5 1.5 0 0 1 0-2.122l4.9-4.9a1.5 1.5 0 0 1 2.122 0l2.095 2.095a1.499 1.499 0 0 1 0 2.122L14.216 18h2.531a.5.5 0 0 1 0 1h-4.092a1.498 1.498 0 0 1-1.121-.438l-2.095-2.096Zm5.612-6.319l-3.6 3.6l2.8 2.8l3.6-3.6a.498.498 0 0 0 0-.708l-2.095-2.095a.5.5 0 0 0-.705.003Zm-1.5 7.108l-2.8-2.8l-.6.6a.5.5 0 0 0 0 .708l2.095 2.095a.5.5 0 0 0 .708 0l.597-.603Z"
      />
    </svg>
  );
}
export default CircleEraser;
