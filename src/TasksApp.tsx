import type { SVGProps } from "react";

export function TasksApp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9.883l-1 1.01V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.085c.071.2.185.389.344.55l.441.45H6a2 2 0 0 1-2-2V4Zm4 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-2-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10.855.352a.5.5 0 0 0-.71-.704l-3.643 3.68l-1.645-1.678a.5.5 0 1 0-.714.7l1.929 1.968a.6.6 0 0 0 .855.002l3.928-3.968Z"
      />
    </svg>
  );
}
export default TasksApp;
