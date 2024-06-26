import type { SVGProps } from "react";

export function MountainLocationTopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.987 5.238c-.082.126-.165.248-.245.364a.894.894 0 0 1-1.511-.039a18.085 18.085 0 0 1-.234-.35C8.497 4.452 8 3.552 8 3a2 2 0 1 1 4 0c0 .551-.498 1.45-.996 2.214l-.017.024ZM11 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM8.435 6.17a19.33 19.33 0 0 1-.256-.379l-5.355 5.641A3 3 0 0 0 2 13.498V15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.502a3 3 0 0 0-.824-2.066l-5.355-5.64c-.087.132-.173.259-.256.378c-.11.16-.237.295-.376.408l2.268 2.39c-1.265.075-2.298.543-3.196.95c-.242.11-.475.215-.7.307c-.66.27-1.264.44-1.916.393c-.557-.04-1.192-.24-1.96-.747L8.81 6.578a1.948 1.948 0 0 1-.376-.408Z"
      />
    </svg>
  );
}
export default MountainLocationTopFilled;
