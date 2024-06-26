import type { SVGProps } from "react";

export function DialpadOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L6.044 6.75H6a1.25 1.25 0 1 0 1.25 1.206l2.794 2.795L10 10.75a1.25 1.25 0 1 0 1.25 1.206l5.896 5.898a.5.5 0 0 0 .708-.708l-15-15ZM15.25 12c0 .314-.116.602-.308.821l-1.763-1.763A1.25 1.25 0 0 1 15.25 12Zm-4-4c0 .314-.116.602-.308.821L9.18 7.058A1.25 1.25 0 0 1 11.25 8Zm-4-4c0 .314-.116.602-.308.821L5.18 3.058A1.25 1.25 0 0 1 7.25 4Zm0 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM11.25 16a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM14 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM15.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"
      />
    </svg>
  );
}
export default DialpadOffFilled;
