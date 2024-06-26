import type { SVGProps } from "react";

export function ClockAlarmFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.763 3.365A3.156 3.156 0 0 0 5.166 2C3.414 2 2 3.43 2 5.187A3.19 3.19 0 0 0 3.353 7.8A6.993 6.993 0 0 0 3 10c0 1.753.644 3.356 1.71 4.584l-1.564 1.563a.5.5 0 0 0 .708.707l1.562-1.563A6.973 6.973 0 0 0 10 17a6.973 6.973 0 0 0 4.584-1.71l1.562 1.563a.5.5 0 0 0 .708-.707l-1.563-1.562A6.973 6.973 0 0 0 17 10c0-.775-.126-1.521-.359-2.218A3.174 3.174 0 0 0 18 5.175A3.172 3.172 0 0 0 14.83 2c-1.078 0-2.03.54-2.602 1.362A6.992 6.992 0 0 0 10 3c-.782 0-1.534.128-2.237.365ZM5.166 3c.657 0 1.248.296 1.646.766a7.03 7.03 0 0 0-3.061 3.077A2.19 2.19 0 0 1 3 5.187C3 3.975 3.973 3 5.166 3Zm8.015.763c.399-.468.99-.763 1.65-.763C16.028 3 17 3.973 17 5.175c0 .661-.294 1.253-.758 1.653a7.03 7.03 0 0 0-3.06-3.065ZM9.5 6a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default ClockAlarmFilled;
