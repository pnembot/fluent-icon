import type { SVGProps } from "react";

export function ThumbDislikeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.483 18.296c-.799.837-2.092.387-2.431-.59c-.28-.807-.644-1.772-.998-2.483c-1.06-2.126-1.678-3.336-3.384-4.85a2.84 2.84 0 0 0-.841-.49c-1.13-.446-2.19-1.615-1.913-3.004l.353-1.765a2.5 2.5 0 0 1 1.794-1.922l5.6-1.527a4.5 4.5 0 0 1 5.61 3.536l.685 3.762a3 3 0 0 1-2.952 3.537h-.883l.01.052c.08.408.176.97.24 1.583c.065.61.1 1.284.049 1.912c-.05.617-.184 1.25-.504 1.73a4.23 4.23 0 0 1-.435.519Z"
      />
    </svg>
  );
}
export default ThumbDislikeFilled;
