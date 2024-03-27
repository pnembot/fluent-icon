import type { SVGProps } from "react";

export function TaskListSquareDatabaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.051A2.457 2.457 0 0 1 9 16.5v-4.043l-1.396 1.396a.5.5 0 0 1-.691.016l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413A.498.498 0 0 1 9 11.25v-.75c0-1.218.877-2.111 1.832-2.642C11.822 7.308 13.12 7 14.5 7c.887 0 1.74.128 2.5.365V6a3 3 0 0 0-3-3H6Zm11 5.421C16.285 8.155 15.425 8 14.5 8C12.015 8 10 9.12 10 10.5s2.015 2.5 4.5 2.5s4.5-1.12 4.5-2.5c0-.867-.794-1.63-2-2.079ZM9.354 6.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 0 1 .708 0ZM14.5 14c1.38 0 2.678-.309 3.668-.858c.293-.163.578-.36.833-.59L19 16.5c0 1.381-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default TaskListSquareDatabaseFilled;
