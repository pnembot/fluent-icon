import type { SVGProps } from "react";

export function CalendarDayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-1.782 6H7.282c-.446 0-.607.046-.77.134a.909.909 0 0 0-.378.378c-.077.142-.122.284-.132.615L6 10.282v2.436c0 .446.046.607.134.77a.906.906 0 0 0 .378.378c.142.077.284.122.616.132l.154.002h5.436c.446 0 .607-.046.77-.134a.908.908 0 0 0 .378-.378c.077-.142.122-.284.132-.615l.002-.155v-2.436c0-.446-.046-.607-.134-.77a.908.908 0 0 0-.378-.378c-.142-.077-.284-.122-.615-.132L12.718 9Zm.194 1.002l.08.005l.006.08v2.825l-.005.08l-.08.006H7.087l-.08-.005l-.006-.08v-2.825l.005-.08l.08-.006h5.825ZM13.5 6h-7l-.09.008a.5.5 0 0 0 0 .984L6.5 7h7l.09-.008a.5.5 0 0 0 0-.984L13.5 6Z"
      />
    </svg>
  );
}
export default CalendarDayFilled;
