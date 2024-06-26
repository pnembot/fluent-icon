import type { SVGProps } from "react";

export function BookNumber(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 7.505a.5.5 0 0 1 .5-.5h1.29l.221-1.102a.5.5 0 0 1 .98.197l-.18.905h.98l.22-1.101a.5.5 0 0 1 .98.195l-.18.906h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.09a.5.5 0 1 1 0 1h-1.289l-.218 1.093a.5.5 0 0 1-.98-.196l.178-.897H9.21l-.219 1.093a.5.5 0 1 1-.98-.196l.18-.897h-.938a.5.5 0 0 1 0-1H8.39l.2-1H7.5a.5.5 0 0 1-.5-.5Zm3.392 1.5l.2-1H9.61l-.2 1h.982ZM6 2h8.004a2 2 0 0 1 2 2v11.501a.5.5 0 0 1-.5.5H5A1 1 0 0 0 6 17h9.504a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM5 15.001h10.004V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11.001Z"
      />
    </svg>
  );
}
export default BookNumber;
