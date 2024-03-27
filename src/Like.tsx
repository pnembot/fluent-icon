import type { SVGProps } from "react";

export function Like(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <g fill="none">
        <path
          d="M8.037 1.924c.209-.521.795-1.08 1.545-.872c.59.164.974.52 1.193.996c.204.444.255.965.264 1.462c.01.535-.101 1.177-.233 1.738c-.06.261-.128.513-.194.74h1.385a2 2 0 0 1 1.919 2.564l-1.365 4.646a2.5 2.5 0 0 1-3.148 1.68l-5.355-1.682a2 2 0 0 1-1.273-1.204l-.52-1.385a2 2 0 0 1 .856-2.425l1.872-1.105a4.062 4.062 0 0 0 .523-.495c.343-.388.817-1.035 1.291-2.045c.205-.436.378-.778.534-1.09c.253-.503.465-.924.706-1.523zM5.52 7.92a.517.517 0 0 1-.017.01L3.619 9.044a1 1 0 0 0-.428 1.213l.52 1.384a1 1 0 0 0 .636.602l5.356 1.682a1.5 1.5 0 0 0 1.889-1.008l1.364-4.646a1 1 0 0 0-.96-1.282H9.929a.5.5 0 0 1-.472-.667c.1-.282.252-.77.377-1.301c.126-.538.214-1.083.206-1.49c-.009-.469-.058-.816-.172-1.063c-.099-.214-.251-.368-.552-.452c-.044-.012-.094-.008-.16.035a.538.538 0 0 0-.19.246c-.254.632-.497 1.116-.765 1.651c-.155.309-.319.635-.498 1.016c-.513 1.093-1.04 1.821-1.449 2.282c-.204.23-.378.394-.506.502a2.919 2.919 0 0 1-.203.157l-.015.01l-.006.005l-.002.001z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default Like;
