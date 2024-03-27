import type { SVGProps } from "react";

export function PanelLeftKeyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.386l.055-.059l.942-.941H8.5V4H15a2 2 0 0 1 2 2v3.123a4.013 4.013 0 0 1 1 .409V6a3 3 0 0 0-3-3H5Zm5.148 15.852A.48.48 0 0 0 10.5 19h2a.569.569 0 0 0 .273-.07a.368.368 0 0 0 .149-.172a.864.864 0 0 0 .062-.235a2.15 2.15 0 0 0 .016-.257V18c.24-.005.427-.013.563-.023a.468.468 0 0 0 .304-.118a.457.457 0 0 0 .117-.297c.01-.13.016-.317.016-.562h.5c.11 0 .198-.023.266-.07a.492.492 0 0 0 .156-.172a.65.65 0 0 0 .07-.235c.01-.088.016-.18.016-.273a3.412 3.412 0 0 1-.008-.227v-.195c.172.063.346.107.523.133c.178.026.357.039.54.039a2.866 2.866 0 0 0 2.078-.898c.27-.282.481-.602.632-.961c.151-.36.227-.74.227-1.141c0-.417-.078-.807-.234-1.172a3.009 3.009 0 0 0-.641-.953a3.009 3.009 0 0 0-.953-.64A2.942 2.942 0 0 0 16 10a3.23 3.23 0 0 0-1.148.234a2.91 2.91 0 0 0-.954.625a3.124 3.124 0 0 0-.656.938a2.716 2.716 0 0 0-.242 1.14c0 .245.029.503.086.774l-2.938 2.937A.48.48 0 0 0 10 17v1.5c0 .135.05.253.148.352Zm7.133-7.133a.723.723 0 0 1 .219.531a.723.723 0 0 1-.219.531a.723.723 0 0 1-.531.219a.723.723 0 0 1-.531-.219a.723.723 0 0 1-.219-.531c0-.208.073-.385.219-.531a.723.723 0 0 1 .531-.219c.208 0 .385.073.531.219Z"
      />
    </svg>
  );
}
export default PanelLeftKeyFilled;
