import * as React from "react"

export function SvgLogo(props) {
  return (
    <svg
      width={200}
      height={29}
      viewBox="0 0 200 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.384 3.933c-.738.18-1.267.489-1.586.927-.319.439-.478 1.117-.478 2.034V21.55c0 .918.16 1.596.478 2.034.32.439.848.748 1.586.927v.18H41.35v-.18c.738-.18 1.266-.488 1.585-.927.32-.438.479-1.116.479-2.034v-7.088h-7.477v7.088c0 .918.16 1.596.478 2.034.32.439.848.748 1.585.927v.18H28.97v-.18c.738-.18 1.266-.488 1.585-.927.32-.438.479-1.116.479-2.034V6.894c0-.917-.16-1.595-.479-2.034-.319-.438-.847-.747-1.585-.927v-.18h9.032v.18c-.737.18-1.266.489-1.585.927-.319.439-.478 1.117-.478 2.034v6.73h7.477v-6.73c0-.917-.16-1.595-.479-2.034-.319-.438-.847-.747-1.585-.927v-.18h9.033v.18zm8.791 21.205c-1.515 0-2.871-.339-4.067-1.017a7.278 7.278 0 01-2.752-2.9c-.638-1.237-.957-2.643-.957-4.218 0-1.575.32-2.98.957-4.217.658-1.236 1.575-2.193 2.752-2.871 1.196-.698 2.552-1.047 4.067-1.047 1.516 0 2.862.349 4.038 1.047 1.176.678 2.084 1.635 2.722 2.871.658 1.236.987 2.642.987 4.217 0 1.575-.33 2.981-.987 4.217a7.075 7.075 0 01-2.722 2.902c-1.176.677-2.522 1.016-4.038 1.016zm0-.957c1.057 0 1.825-.568 2.303-1.704.499-1.157.748-2.981.748-5.474 0-2.492-.25-4.307-.748-5.443-.478-1.157-1.246-1.735-2.303-1.735-1.076 0-1.854.568-2.333 1.705-.478 1.136-.717 2.96-.717 5.473 0 2.493.239 4.317.717 5.474.479 1.136 1.257 1.704 2.333 1.704zm31.72-1.645c0 .578.14 1.017.419 1.316.299.3.747.519 1.346.658v.18h-7.448v-.18c.439-.08.748-.19.927-.329.18-.14.29-.369.33-.688v-9.93c0-1.814-.669-2.721-2.004-2.721-.898 0-1.556.498-1.975 1.495.06.32.09.668.09 1.047v9.332c0 .558.1.967.3 1.226.199.26.548.449 1.046.568v.18h-7.118v-.18c.498-.12.847-.309 1.047-.568.2-.26.299-.668.299-1.226v-9.152c0-1.815-.668-2.722-2.004-2.722-.877 0-1.506.459-1.884 1.376v10.498c0 .558.1.967.299 1.226.2.26.548.449 1.047.568v.18h-7.537v-.18c.598-.14 1.036-.359 1.316-.658.299-.299.448-.738.448-1.316v-9.54c0-.778-.13-1.316-.389-1.616-.239-.319-.698-.508-1.376-.568v-.18l6.192-1.704v2.811c.279-.897.777-1.595 1.495-2.093.718-.519 1.565-.778 2.542-.778 1.097 0 1.994.27 2.692.808.718.518 1.186 1.246 1.406 2.183.299-.897.827-1.615 1.585-2.154.758-.558 1.645-.837 2.662-.837 1.356 0 2.403.409 3.14 1.226.738.798 1.107 1.895 1.107 3.29v9.152zm15.537-3.26c-.339 2.014-1.077 3.5-2.213 4.457a5.828 5.828 0 01-3.858 1.405c-1.197 0-2.303-.299-3.32-.897-.997-.618-1.805-1.515-2.423-2.692-.598-1.176-.897-2.592-.897-4.247 0-1.615.28-3.06.837-4.336.579-1.296 1.386-2.303 2.423-3.021 1.037-.718 2.223-1.077 3.559-1.077 1.037 0 1.994.23 2.871.688.898.459 1.616 1.196 2.154 2.213.558 1.017.837 2.303.837 3.858H97.19c.14 1.895.668 3.36 1.586 4.397.917 1.037 2.113 1.555 3.589 1.555.897 0 1.665-.17 2.303-.508.638-.36 1.156-.977 1.555-1.855l.209.06zm-6.55-9.57c-.837 0-1.505.438-2.004 1.316-.478.857-.718 2.033-.718 3.529v.329h5.175c.02-3.45-.798-5.175-2.453-5.175zm19.451 4.247c2.212-.02 3.977.428 5.293 1.345 1.317.918 1.975 2.204 1.975 3.859 0 1.794-.718 3.17-2.153 4.127-1.437.937-3.52 1.406-6.252 1.406h-9.87v-.18c.758-.2 1.286-.498 1.585-.897.32-.419.479-1.136.479-2.153V6.804c0-.937-.159-1.605-.479-2.004-.299-.398-.827-.687-1.585-.867v-.18h9.87c2.413 0 4.238.42 5.474 1.257 1.256.817 1.884 2.044 1.884 3.679 0 1.495-.559 2.701-1.675 3.618-1.096.898-2.612 1.406-4.546 1.526v.12zM115.295 4.5v9.182h1.226c2.572 0 3.858-1.565 3.858-4.695 0-1.476-.329-2.592-.986-3.35-.639-.758-1.596-1.137-2.872-1.137h-1.226zm1.824 19.441c1.237 0 2.214-.419 2.931-1.256.719-.838 1.077-2.004 1.077-3.5 0-1.654-.358-2.87-1.077-3.648-.697-.798-1.774-1.197-3.23-1.197h-1.525v9.601h1.824zM139.31 8.868v4.307h-.15c-.339-.18-.857-.27-1.554-.27-1.058 0-1.865.37-2.423 1.107-.538.738-.808 2.044-.808 3.918v4.606c0 .638.18 1.097.538 1.376.36.28.968.479 1.825.598v.18h-8.554v-.18c.598-.14 1.037-.359 1.317-.658.298-.299.448-.738.448-1.316v-9.271c0-.858-.13-1.456-.39-1.795-.259-.359-.717-.568-1.375-.628v-.18l6.012-1.734v6.7h.149c.12-2.313.579-4.018 1.376-5.115.818-1.097 1.904-1.645 3.26-1.645h.329zm13.884 10.408c-.34 2.014-1.077 3.5-2.213 4.457a5.828 5.828 0 01-3.858 1.405c-1.197 0-2.304-.299-3.321-.897-.996-.618-1.804-1.515-2.423-2.692-.598-1.176-.896-2.592-.896-4.247 0-1.615.279-3.06.836-4.336.579-1.296 1.386-2.303 2.423-3.021 1.037-.718 2.224-1.077 3.559-1.077 1.037 0 1.995.23 2.872.688.897.459 1.616 1.196 2.154 2.213.557 1.017.837 2.303.837 3.858h-9.212c.139 1.895.668 3.36 1.585 4.397.917 1.037 2.113 1.555 3.589 1.555.898 0 1.665-.17 2.303-.508.638-.36 1.157-.977 1.556-1.855l.209.06zm-6.551-9.57c-.836 0-1.504.438-2.003 1.316-.478.857-.718 2.033-.718 3.529v.329h5.174c.02-3.45-.797-5.175-2.453-5.175zm21.097 9.57c-.34 2.014-1.078 3.5-2.214 4.457a5.828 5.828 0 01-3.858 1.405c-1.197 0-2.303-.299-3.32-.897-.997-.618-1.805-1.515-2.422-2.692-.599-1.176-.898-2.592-.898-4.247 0-1.615.279-3.06.838-4.336.577-1.296 1.385-2.303 2.422-3.021 1.037-.718 2.223-1.077 3.56-1.077 1.037 0 1.993.23 2.871.688.896.459 1.615 1.196 2.153 2.213.558 1.017.838 2.303.838 3.858h-9.213c.14 1.895.669 3.36 1.586 4.397.917 1.037 2.113 1.555 3.589 1.555.897 0 1.664-.17 2.303-.508.638-.36 1.156-.977 1.555-1.855l.21.06zm-6.551-9.57c-.837 0-1.505.438-2.004 1.316-.478.857-.718 2.033-.718 3.529v.329h5.175c.019-3.45-.798-5.175-2.453-5.175zm8.235 14.984v-.09l8.434-14.625h-1.286c-1.556 0-2.861.508-3.918 1.525s-1.835 2.443-2.333 4.277h-.149l.867-6.46h12.024v.09l-8.435 14.625h1.077c1.715 0 3.13-.509 4.247-1.526 1.116-1.037 1.984-2.622 2.601-4.755h.15l-.598 6.939h-12.681zm27.873-5.414c-.339 2.014-1.076 3.5-2.213 4.457a5.825 5.825 0 01-3.857 1.405c-1.197 0-2.305-.299-3.321-.897-.996-.618-1.804-1.515-2.423-2.692-.598-1.176-.897-2.592-.897-4.247 0-1.615.28-3.06.837-4.336.579-1.296 1.386-2.303 2.423-3.021 1.037-.718 2.224-1.077 3.559-1.077 1.037 0 1.994.23 2.871.688.898.459 1.616 1.196 2.154 2.213.558 1.017.837 2.303.837 3.858h-9.211c.139 1.895.667 3.36 1.585 4.397.917 1.037 2.113 1.555 3.589 1.555.898 0 1.665-.17 2.303-.508.637-.36 1.156-.977 1.556-1.855l.208.06zm-6.55-9.57c-.837 0-1.504.438-2.003 1.316-.479.857-.718 2.033-.718 3.529v.329h5.174c.02-3.45-.797-5.175-2.453-5.175z"
        fill="#22252D"
      />
      <mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={23}
        height={22}
      >
        <path
          d="M17.911 3.111H4.761A4.261 4.261 0 00.5 7.373v13.15a4.261 4.261 0 004.261 4.26h13.15a4.261 4.261 0 004.261-4.26V7.373a4.261 4.261 0 00-4.26-4.262z"
          fill="#22252D"
        />
      </mask>
      <g mask="url(#a)" fill="#22252D">
        <path d="M12.149 2.453c1.654.81 3.058 1.672 4.302 2.442 2.753 1.702 4.134 2.446 7.893 2.446v-3.16c-2.892 0-3.808-.239-6.219-1.728h-5.976zM6.374 23c-2.751-1.7-4.132-2.442-7.892-2.442v3.161c2.893 0 3.808.235 6.22 1.724h5.975c-1.654-.81-3.059-1.673-4.303-2.442zM24.343 10.214c-4.533 0-6.442-1.18-9.332-2.967C11.388 5.006 6.88 2.453-1.518 2.453v3.164c7.625 0 11.59 2.052 15.09 4.216 3.054 1.889 5.465 3.542 10.77 3.542v-3.16zm0 12.069c-7.625 0-11.59-2.29-15.09-4.455-3.053-1.889-5.464-3.304-10.77-3.304v3.161c4.532 0 6.441.942 9.332 2.73 3.622 2.24 8.131 5.028 16.528 5.028v-3.16zM24.343 19.446c-6.852 0-10.308-2.138-13.65-4.205-3.153-1.95-6.132-3.59-12.21-3.59v-3.16c6.851 0 10.307 2.097 13.65 4.164 3.153 1.95 6.132 3.627 12.21 3.627v3.164z" />
      </g>
    </svg>
  )
}
