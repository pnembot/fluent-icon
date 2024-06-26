import type { SVGProps } from "react";

export function ArrowForwardDownLightning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m16.293 7l-2.682-2.682a.5.5 0 0 1 .638-.765l.069.058l3.566 3.569l.05.07l.027.057l.023.067l.005.021A.496.496 0 0 1 18 7.5l-.002-.024v.067l-.015.086l-.02.062l-.04.076l-.055.071l-3.55 3.551a.5.5 0 0 1-.765-.638l.058-.069l2.682-2.681L12 8C8.478 8 6.115 6.024 6.004 3.208L6 3a.5.5 0 0 1 1 0c0 2.273 1.807 3.905 4.739 3.996L12 7h4.293ZM11 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.472.334l-.88 2.5a.5.5 0 0 0 .472.665h.776l-.508 1.87a.5.5 0 0 0 .903.4l2.25-3.5A.5.5 0 0 0 8 12h-.746l.28-.841a.5.5 0 0 0-.474-.659H5.88Z"
      />
    </svg>
  );
}
export default ArrowForwardDownLightning;
