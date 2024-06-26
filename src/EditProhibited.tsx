import type { SVGProps } from "react";

export function EditProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.18 2.927a2.975 2.975 0 0 0-4.26-.054l-9.375 9.375a2.438 2.438 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.518 2.518 0 0 0 1.234-.678L8.207 16a5.488 5.488 0 0 1-.2-1.214l-.945.945a1.518 1.518 0 0 1-.744.409l-3.16.702l.708-3.183c.059-.267.193-.511.387-.704l7.996-7.996l2.793 2.792l-1.256 1.256c.418.022.825.09 1.214.2l2.127-2.127a2.975 2.975 0 0 0 .052-4.153Zm-3.553.653a1.975 1.975 0 0 1 2.793 2.793l-.671.671l-2.793-2.792l.671-.672ZM9 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 10 14.5Zm3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 13.5 18Z"
      />
    </svg>
  );
}
export default EditProhibited;
