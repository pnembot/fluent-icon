import type { SVGProps } from "react";

export function ShiftsActivity(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.002 2.483a.5.5 0 0 1-.466.532a7 7 0 1 0 7.449 7.447a.5.5 0 1 1 .998.065a8 8 0 1 1-8.512-8.51a.5.5 0 0 1 .531.466Zm1.005.067a.5.5 0 0 1 .59-.391c.56.113 1.098.285 1.608.509a.5.5 0 1 1-.4.916a6.943 6.943 0 0 0-1.407-.445a.5.5 0 0 1-.39-.59Zm6.329 4.253a.5.5 0 1 0-.917.4c.194.443.343.91.441 1.397a.5.5 0 0 0 .98-.2a7.946 7.946 0 0 0-.504-1.597Zm-2.921-2.888a.5.5 0 0 1 .704-.063c.388.323.746.683 1.067 1.074a.5.5 0 1 1-.773.635a7.04 7.04 0 0 0-.934-.941a.5.5 0 0 1-.064-.705ZM10 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H10V5.5Z"
      />
    </svg>
  );
}
export default ShiftsActivity;
