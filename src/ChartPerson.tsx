import type { SVGProps } from "react";

export function ChartPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a.5.5 0 0 1 .5.5V3h4.75A2.752 2.752 0 0 1 18 5.75v4.592a3.015 3.015 0 0 0-1-.94V5.75a1.75 1.75 0 0 0-.878-1.518l-.025-.014A1.742 1.742 0 0 0 15.25 4H4.75A1.75 1.75 0 0 0 3 5.75v6.55A1.75 1.75 0 0 0 4.75 14h8.514l.009.01c-.724.065-1.36.44-1.773.99h-1.488v.002H7.768L5.916 17.78a.5.5 0 1 1-.832-.555l1.482-2.223H4.75A2.75 2.75 0 0 1 2 12.252V5.75A2.75 2.75 0 0 1 4.75 3H9.5v-.5A.5.5 0 0 1 10 2ZM5 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.502a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default ChartPerson;
