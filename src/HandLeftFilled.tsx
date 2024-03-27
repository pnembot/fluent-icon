import type { SVGProps } from "react";

export function HandLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 8.5V2.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0v6.5c-.662-.426-1.392-.75-2-.75c-.971 0-1.787.324-1.984 1.116A.604.604 0 0 0 3 10.76c0 .15.07.292.191.382l1.312.985c1.063.796 2.064 1.865 2.762 2.988a32.02 32.02 0 0 1 1.053 1.868C8.678 17.661 8.906 18 10 18h3.046c.954 0 1.317-.533 1.954-2s1-2.944 1-3.5V5.25a.75.75 0 0 0-1.5 0V9a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0Z"
      />
    </svg>
  );
}
export default HandLeftFilled;
