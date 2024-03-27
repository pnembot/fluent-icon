import type { SVGProps } from "react";

export function DocumentJs(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m9.65 1.44l2.91 2.91c.28.282.438.663.44 1.06V13a2.006 2.006 0 0 1-2 2H8.54c.216-.296.36-.639.42-1H11a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v6.09a1.434 1.434 0 0 0-1 0V3a2.006 2.006 0 0 1 2-2h3.59c.397.002.778.16 1.06.44Zm-.504 3.414A.5.5 0 0 0 9.5 5h2.29L9 2.21V4.5a.5.5 0 0 0 .146.354ZM2.5 15A1.5 1.5 0 0 1 1 13.5V13a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 1 2.5 15Zm4.073 0h-.146A1.428 1.428 0 0 1 5 13.573a.533.533 0 0 1 .5-.537a.47.47 0 0 1 .5.464a.449.449 0 0 0 .427.5h.146a.427.427 0 0 0 .192-.808l-.976-.492a1.427 1.427 0 0 1 .638-2.7h.146A1.428 1.428 0 0 1 8 11.427a.533.533 0 0 1-.5.537a.47.47 0 0 1-.5-.464v-.073A.427.427 0 0 0 6.573 11h-.146a.427.427 0 0 0-.192.808l.976.489A1.427 1.427 0 0 1 6.573 15Z"
      />
    </svg>
  );
}
export default DocumentJs;
