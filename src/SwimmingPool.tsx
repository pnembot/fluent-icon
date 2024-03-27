import type { SVGProps } from "react";

export function SwimmingPool(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 5a1 1 0 0 1 2 0v5.047c.321.037.655.1 1 .19V9h5v3.003c.367.005.702-.032 1-.09V5a2 2 0 1 0-4 0v.5a.5.5 0 0 0 1 0V5a1 1 0 1 1 2 0v3H8V5a2 2 0 1 0-4 0v.5a.5.5 0 0 0 1 0V5Zm8.075 9c-1.11 0-2.419-.268-3.828-1.08c-3.418-1.971-5.317-.148-5.387-.079a.507.507 0 0 1-.71 0a.476.476 0 0 1 0-.693c.106-.106 2.485-2.463 6.607-.1c3.578 2.061 6.337.12 6.447.04a.511.511 0 0 1 .7.11c.16.217.12.524-.11.693c-.09.069-1.54 1.1-3.719 1.1V14Zm-3.828 1.92c1.41.813 2.719 1.08 3.828 1.08v-.01c2.18 0 3.628-1.03 3.718-1.1a.492.492 0 0 0 .11-.693a.511.511 0 0 0-.7-.109c-.11.08-2.868 2.021-6.446-.04c-4.122-2.363-6.5-.006-6.607.1c-.2.187-.2.505 0 .693c.2.198.52.188.71 0c.07-.07 1.969-1.892 5.387.08Z"
      />
    </svg>
  );
}
export default SwimmingPool;
