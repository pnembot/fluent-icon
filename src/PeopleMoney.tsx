import type { SVGProps } from "react";

export function PeopleMoney(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 5.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM10 10c.249 0 .487.045.707.129c-.486.162-.906.47-1.207.871h-6a1 1 0 0 0-1 1v.078l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 14.201 4.513 15 6.75 15c.953 0 1.686-.145 2.25-.366v.866c0 .064.002.127.007.19c-.622.194-1.367.31-2.257.31c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12a2 2 0 0 1 2-2H10Zm3-3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM10 12.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5ZM16.5 16h1a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5ZM11 14.5v1a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
export default PeopleMoney;
