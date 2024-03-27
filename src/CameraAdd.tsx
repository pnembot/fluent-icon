import type { SVGProps } from "react";

export function CameraAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.124 2a1.5 1.5 0 0 0-1.34.826L6.194 4h-1.69a2.5 2.5 0 0 0-2.5 2.5v8a2.5 2.5 0 0 0 2.5 2.5H9.6a5.464 5.464 0 0 1-.393-1H4.505a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5h1.998a.5.5 0 0 0 .446-.276l.728-1.449A.5.5 0 0 1 8.124 3h3.764a.5.5 0 0 1 .448.276l.723 1.447a.5.5 0 0 0 .447.276h1.999a1.5 1.5 0 0 1 1.5 1.5v3.103a5.49 5.49 0 0 1 1 .659V6.499a2.5 2.5 0 0 0-2.5-2.5h-1.69l-.585-1.17A1.5 1.5 0 0 0 11.888 2H8.124ZM10 6a4.002 4.002 0 0 1 3.883 3.034a5.471 5.471 0 0 0-.981.202a3.001 3.001 0 1 0-3.666 3.666a5.473 5.473 0 0 0-.202.98A4.002 4.002 0 0 1 10 6Zm9 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default CameraAdd;
