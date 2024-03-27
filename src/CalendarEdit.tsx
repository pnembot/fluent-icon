import type { SVGProps } from "react";

export function CalendarEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.499 3a2.5 2.5 0 0 1 2.5 2.5v3.502a2.87 2.87 0 0 0-1 .229V7h-12v7.499a1.5 1.5 0 0 0 1.5 1.5h3.975c-.016.05-.03.103-.043.155l-.211.845H5.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 5.5 3h8.999Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm-3.52 11.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default CalendarEdit;
