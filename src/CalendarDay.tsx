import type { SVGProps } from "react";

export function CalendarDay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4Zm-1.782 5c.446 0 .607.046.77.134a.906.906 0 0 1 .378.378c.088.163.134.324.134.77v2.436c0 .446-.046.607-.134.77a.908.908 0 0 1-.378.378c-.162.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-2.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134h5.436Zm.194 1.002H7.088l-.08.005l-.006.08v2.825l.005.08l.08.006h5.825l.08-.005l.006-.08v-2.825l-.005-.08l-.08-.006ZM13.5 6a.5.5 0 0 1 .09.992L13.5 7h-7a.5.5 0 0 1-.09-.992L6.5 6h7Z"
      />
    </svg>
  );
}
export default CalendarDay;
