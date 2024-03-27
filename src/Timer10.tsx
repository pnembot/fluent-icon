import type { SVGProps } from "react";

export function Timer10(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707ZM9 6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4ZM9.5 18c.515 0 1.017-.056 1.5-.161V16.81a6 6 0 1 1 4.442-6.648c.312-.1.644-.155.987-.162A7.002 7.002 0 0 0 2.5 11a7 7 0 0 0 7 7Zm4.5-4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V18.5a.5.5 0 0 0 1 0v-7Z"
      />
    </svg>
  );
}
export default Timer10;
