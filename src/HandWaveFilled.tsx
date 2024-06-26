import type { SVGProps } from "react";

export function HandWaveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.96em"
      height={height}
      viewBox="0 0 20 21"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M15.846 1.147a.492.492 0 0 0-.703.001a.508.508 0 0 0 .008.712a6.571 6.571 0 0 1 1.856 5.567a.508.508 0 0 0 .42.574a.492.492 0 0 0 .563-.42a7.594 7.594 0 0 0-2.144-6.434Zm-10.393.356a.75.75 0 0 0-1.412.504l2.114 5.92a.533.533 0 1 1-1.004.358l-1.697-4.78a.75.75 0 0 0-1.414.5l2.547 7.176c-2.117-.575-2.852.574-3.07 1.091c-.053.127.026.26.158.3c.82.247 3.662 1.27 6.842 4.317c.604.579 1.492.78 2.265.457l2.158-.902a2 2 0 0 0 1.21-1.575l.274-2.013a8 8 0 0 0-.343-3.626l-1.085-3.227l-.007.003l-1.153-3.493a.75.75 0 0 0-1.42.484l.963 2.935a.633.633 0 0 1-1.195.417L8.673 2.002a.75.75 0 1 0-1.413.504l1.507 4.335a.663.663 0 1 1-1.248.445L5.453 1.503Zm8.787 1.571a.5.5 0 0 1 .686.173l.296.495a5.47 5.47 0 0 1 .775 2.757a.5.5 0 1 1-1 .01a4.47 4.47 0 0 0-.634-2.254l-.295-.495a.5.5 0 0 1 .172-.686Z"
      />
    </svg>
  );
}
export default HandWaveFilled;
