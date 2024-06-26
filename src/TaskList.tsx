import type { SVGProps } from "react";

export function TaskList(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M9.354 6.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 0 1 .708 0z"
          fill="currentColor"
        />
        <path
          d="M9.354 12.104a.5.5 0 0 0-.708-.708l-1.412 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75z"
          fill="currentColor"
        />
        <path
          d="M10.5 12.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
        <path
          d="M11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11z"
          fill="currentColor"
        />
        <path
          d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-11zM4.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TaskList;
