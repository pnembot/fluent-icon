import type { SVGProps } from "react";

export function TaskListSquareRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm11.354 1.104a.5.5 0 1 0-.707-.708l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016l1.75-1.75Zm0 4.292a.5.5 0 0 0-.707 0l-1.413 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75a.5.5 0 0 0 0-.707ZM6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 7.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default TaskListSquareRtlFilled;
