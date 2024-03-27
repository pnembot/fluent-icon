import type { SVGProps } from "react";

export function HatGraduation(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.506 3.4a3 3 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867L16 10.01v4.49a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.095 8.095 0 0 1-1.141.733A9.091 9.091 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.09 8.09 0 0 1-1.14-.733a5.78 5.78 0 0 1-.382-.322A.531.531 0 0 1 4 14.5v-4.488L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .26-.439L8.507 3.4Zm2.988 9.198a3 3 0 0 1-2.988 0L5 10.585v3.691a7.1 7.1 0 0 0 1.173.782c.88.47 2.175.941 3.827.941a8.091 8.091 0 0 0 3.827-.94A7.097 7.097 0 0 0 15 14.276v-3.692l-3.506 2.013Zm-.498-8.33a2 2 0 0 0-1.992 0l-6.5 3.731l6.5 3.732a2 2 0 0 0 1.992 0l6.5-3.732l-6.5-3.732Z"
      />
    </svg>
  );
}
export default HatGraduation;
