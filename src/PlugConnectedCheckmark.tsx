import type { SVGProps } from "react";

export function PlugConnectedCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.854 2.854a.5.5 0 0 0-.708-.708l-2.668 2.669a4.036 4.036 0 0 0-5.332.331l-.3.3a1.49 1.49 0 0 0 0 2.108l2.465 2.464c.28-.2.58-.373.895-.518L9.553 6.846a.49.49 0 0 1 0-.692l.3-.3a3.036 3.036 0 0 1 5.01 3.158c.342.022.677.076 1 .158a4.038 4.038 0 0 0-.678-3.648l2.669-2.668Zm-10.3 5.992l2.464 2.465c-.2.28-.373.58-.518.895L6.847 9.554a.49.49 0 0 0-.693 0l-.3.3a3.035 3.035 0 0 0 3.158 5.009c.022.343.076.677.158 1a4.038 4.038 0 0 1-3.648-.678l-2.668 2.669a.5.5 0 0 1-.708-.708l2.669-2.668a4.036 4.036 0 0 1 .332-5.332l.3-.3a1.49 1.49 0 0 1 2.107 0ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default PlugConnectedCheckmark;
