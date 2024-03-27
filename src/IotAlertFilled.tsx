import type { SVGProps } from "react";

export function IotAlertFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 3.991a2 2 0 0 1-2.647 1.893l-1.284 1.943c.108.104.21.216.302.334A4.002 4.002 0 0 0 9.499 12v.958a3 3 0 0 1-1.91-1.173l-1.635.787a2 2 0 1 1-.452-.892l1.633-.787a2.999 2.999 0 0 1 .637-2.902l-.935-1.174a2 2 0 1 1 .775-.632l.944 1.185A2.98 2.98 0 0 1 10 7c.442 0 .862.096 1.24.268l1.278-1.934A2 2 0 1 1 16 3.991ZM10.5 12a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H9.503a.5.5 0 0 1-.323-.881L10.5 14v-2Zm3 6a1.501 1.501 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1Z"
      />
    </svg>
  );
}
export default IotAlertFilled;
