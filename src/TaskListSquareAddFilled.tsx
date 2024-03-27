import type { SVGProps } from "react";

export function TaskListSquareAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6A5.5 5.5 0 0 0 9.6 17H6a3 3 0 0 1-3-3V6Zm6.354.396a.5.5 0 0 0-.708 0L7.234 7.808l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016l1.75-1.75a.5.5 0 0 0 0-.707Zm0 5.708a.5.5 0 0 0-.708-.708l-1.412 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75ZM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm8 7.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-4-2V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default TaskListSquareAddFilled;
