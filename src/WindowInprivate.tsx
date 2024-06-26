import type { SVGProps } from "react";

export function WindowInprivate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.498 3.001a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-7.5h.003v-1h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5h-9Zm10.5 2.5v.5h-1.29l1.145-1.144c.093.195.145.413.145.644Zm-.85-1.353l-1.854 1.853h-2.828l2-2h2.032c.232 0 .453.053.65.147Zm-4.096-.147l-2 2H6.223l2-2h2.829Zm-4.243 0l-2 2h-.811v-.5a1.5 1.5 0 0 1 1.5-1.5H6.81ZM3.998 8.226l1.225-1.225h2.829l-4.054 4.054V8.226Zm5.468-1.225h2.828L4.145 15.15a1.494 1.494 0 0 1-.147-.649v-2.032L9.466 7Zm4.243 0h2.289v.539L7.537 16H5.498c-.23 0-.45-.052-.644-.145L13.709 7Zm2.289 1.953v2.829L11.78 16H8.95l7.047-7.047Zm0 4.243V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.304l2.804-2.804Z"
      />
    </svg>
  );
}
export default WindowInprivate;
