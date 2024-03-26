import React, { SVGProps } from "react";

export function DrawTextFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.14 10.5H6.857l1.642-4.685L10.14 10.5Zm.526 1.5l.33.944l1.178-1.177L9.3 3.569c-.266-.759-1.339-.759-1.604 0L4.04 14.003a.75.75 0 0 0 1.416.496L6.33 12h4.335Zm5.14-2.452l-4.829 4.83a2.197 2.197 0 0 0-.578 1.02l-.374 1.498a.917.917 0 0 0-.024.14a4.601 4.601 0 0 1-1.111-.088c-.073-.017-.1-.11-.066-.178c.18-.348.233-1.073-.404-1.33c-.86-.345-1.978.125-2.862.498c-.366.154-.692.29-.944.346c-.387.086-.848-.065-1.216-.249c-.212-.106-.482.082-.36.286c.219.366.614.737 1.326.825c.82.102 1.391-.152 1.975-.41c.4-.178.805-.358 1.3-.428c.086-.012.145.09.112.17c-.152.357-.133.894.316 1.244c.518.405 2.191.511 3.313.183l1.221-.305c.387-.097.74-.296 1.021-.578l4.83-4.83a1.87 1.87 0 1 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default DrawTextFilled;
