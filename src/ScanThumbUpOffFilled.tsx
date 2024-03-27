import type { SVGProps } from "react";

export function ScanThumbUpOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.414 3.121A2.49 2.49 0 0 0 2 4.5v2a.5.5 0 0 0 1 0v-2c0-.232.052-.45.146-.647L7.723 8.43a1.42 1.42 0 0 1-.066.053l-1.239.698c-.771.434-1.122 1.352-.797 2.18l.35.89c.205.52.644.91 1.18 1.071l3.61 1.083a2.24 2.24 0 0 0 2.302-.635l3.084 3.084A1.494 1.494 0 0 1 15.5 17h-2a.5.5 0 0 0 0 1h2c.51 0 .983-.152 1.379-.414l.267.268a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708l.268.267Zm6.443 3.615l5.025 5.025l.54-1.76c.362-1.176-.567-2.296-1.77-2.296h-.283c.078-.344.145-.745.137-1.104c-.006-.336-.04-.762-.227-1.148c-.212-.44-.59-.765-1.126-.907c-.837-.223-1.434.383-1.63.85c-.154.364-.288.618-.458.941v.001l-.208.398ZM17 14.879l.975.975c.016-.116.025-.234.025-.354v-2a.5.5 0 0 0-1 0v1.379ZM4.146 2.025L5.121 3H6.5a.5.5 0 0 0 0-1h-2c-.12 0-.238.008-.354.025ZM15.5 3A1.5 1.5 0 0 1 17 4.5v2a.5.5 0 0 0 1 0v-2A2.5 2.5 0 0 0 15.5 2h-2a.5.5 0 0 0 0 1h2ZM3 15.5A1.5 1.5 0 0 0 4.5 17h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-2a.5.5 0 0 1 1 0v2Z"
      />
    </svg>
  );
}
export default ScanThumbUpOffFilled;
