import type { SVGProps } from "react";

export function FastAccelerationFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.904 7.197A3.484 3.484 0 0 1 11 6.5c.786 0 1.512.26 2.096.697l-1.08 1.08A1.99 1.99 0 0 0 11 8c-.37 0-.718.101-1.016.277l-1.08-1.08ZM13 10c0-.37-.101-.718-.277-1.016l1.08-1.08c.438.584.697 1.31.697 2.096s-.26 1.512-.697 2.096l-1.08-1.08A1.99 1.99 0 0 0 13 10Zm-2 2c.37 0 .718-.101 1.016-.277l1.08 1.08A3.484 3.484 0 0 1 11 13.5c-.786 0-1.512-.26-2.096-.697l1.08-1.08A1.99 1.99 0 0 0 11 12Zm-2-2c0 .37.101.718.277 1.016l-1.08 1.08A3.484 3.484 0 0 1 7.5 10c0-.786.26-1.512.697-2.096l1.08 1.08A1.99 1.99 0 0 0 9 10ZM6.101 5A6.979 6.979 0 0 0 4 10c0 1.074.242 2.09.674 3H3.5a.5.5 0 0 0 0 1h1.755c.25.36.534.694.846 1H1.5a.5.5 0 0 0 0 1h5.892a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.601ZM11 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
      />
    </svg>
  );
}
export default FastAccelerationFilled;
