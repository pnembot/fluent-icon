import type { SVGProps } from "react";

export function KeyboardMouse(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1ZM8.25 9a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-2-2a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-1 2a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM4 6.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm10 2.4v2.6a.755.755 0 0 1-.75.75H2.75a.755.755 0 0 1-.75-.75v-6.5A.755.755 0 0 1 2.75 4H9V3H2.75A1.746 1.746 0 0 0 1 4.75v6.5A1.746 1.746 0 0 0 2.75 13h10.5A1.747 1.747 0 0 0 15 11.25V7.94a3.09 3.09 0 0 1-1 .71ZM3 10.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5Zm6-2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-2-2a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-2.5 2a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0Zm-.5-2a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM8.25 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm-3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm1-2a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm-3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5ZM12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1Zm1-9h-2A1.5 1.5 0 0 0 10 2.5v3a2.5 2.5 0 0 0 5 0v-3A1.5 1.5 0 0 0 13.5 1Zm.5 4.5a1.5 1.5 0 1 1-3 0v-3a.5.5 0 0 1 .5-.5h.5v1.5a.5.5 0 0 0 1 0V2h.5a.5.5 0 0 1 .5.5v3Z"
      />
    </svg>
  );
}
export default KeyboardMouse;
