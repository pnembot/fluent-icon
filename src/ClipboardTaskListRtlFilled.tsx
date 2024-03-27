import type { SVGProps } from "react";

export function ClipboardTaskListRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.354 4.146a.5.5 0 0 0-.707 0l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016l1.75-1.75a.5.5 0 0 0 0-.707Zm0 5.708a.5.5 0 0 0-.707-.708l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75ZM6.5 8a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 13.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default ClipboardTaskListRtlFilled;
