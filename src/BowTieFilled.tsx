import type { SVGProps } from "react";

export function BowTieFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.458 4.635c.283.154.518.37.694.628A1.49 1.49 0 0 1 9 5h2c.315 0 .607.097.848.263c.176-.257.411-.474.694-.628l2.5-1.364C16.375 2.544 18 3.509 18 5.027v4.946c0 1.518-1.625 2.483-2.958 1.756l-2.5-1.364a1.996 1.996 0 0 1-.694-.628A1.493 1.493 0 0 1 11 10H9a1.49 1.49 0 0 1-.848-.263a1.997 1.997 0 0 1-.694.628l-2.5 1.364C3.625 12.456 2 11.491 2 9.973V5.027C2 3.509 3.625 2.544 4.958 3.27l2.5 1.364ZM5.5 7.5A.5.5 0 0 0 6 8h2V7H6a.5.5 0 0 0-.5.5ZM14 7h-2v1h2a.5.5 0 0 0 0-1Zm-5.695 4.05c-.129.066-.233.12-.368.193L5.542 12.55l-.958 2.394A1.5 1.5 0 0 0 5.977 17H7.5A1.5 1.5 0 0 0 9 15.5V11h-.6l-.095.05ZM11 15.5V11h.594l.187.096c.092.047.18.092.282.147l2.395 1.306l.958 2.394A1.5 1.5 0 0 1 14.023 17H12.5a1.5 1.5 0 0 1-1.5-1.5Z"
      />
    </svg>
  );
}
export default BowTieFilled;
