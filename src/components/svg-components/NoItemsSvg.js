import React from "react";
import { useTheme } from "@emotion/react";

const NoItemsSvg = () => {
  const theme = useTheme();
  return (
    <div>
      <svg
        width="170"
        height="211"
        viewBox="0 0 170 211"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3356_19056)">
          <ellipse
            cx="89.42"
            cy="184.519"
            rx="59.0548"
            ry="3.36255"
            fill={theme.palette.primary.main}
            fillOpacity="0.3"
          />
        </g>
        <g opacity="0.4" clipPath="url(#clip0_3356_19056)">
          <path
            d="M46.6463 59.0666C46.6463 60.7008 47.2955 62.268 48.451 63.4236C49.6066 64.5791 51.1738 65.2283 52.808 65.2283C53.1348 65.2283 53.4483 65.3581 53.6794 65.5892C53.9105 65.8203 54.0403 66.1338 54.0403 66.4606C54.0403 66.7874 53.9105 67.1009 53.6794 67.332C53.4483 67.5631 53.1348 67.6929 52.808 67.6929C51.1019 67.6929 49.434 67.187 48.0155 66.2391C46.5969 65.2913 45.4912 63.944 44.8383 62.3678C44.1854 60.7915 44.0145 59.057 44.3474 57.3837C44.6802 55.7103 45.5018 54.1733 46.7082 52.9668C47.9147 51.7604 49.4517 50.9388 51.1251 50.606C52.7984 50.2731 54.5329 50.444 56.1092 51.0969C57.6854 51.7498 59.0327 52.8554 59.9806 54.274C60.9284 55.6926 61.4344 57.3605 61.4344 59.0666L61.4344 88.6427C61.4344 88.9695 61.3045 89.2829 61.0734 89.5141C60.8423 89.7452 60.5289 89.875 60.202 89.875C59.8752 89.875 59.5617 89.7452 59.3306 89.5141C59.0995 89.2829 58.9697 88.9695 58.9697 88.6427L58.9697 59.0666C58.9697 57.4324 58.3205 55.8652 57.165 54.7096C56.0094 53.5541 54.4422 52.9049 52.808 52.9049C51.1738 52.9049 49.6066 53.5541 48.451 54.7096C47.2955 55.8652 46.6463 57.4324 46.6463 59.0666ZM49.111 76.3193C49.111 76.973 49.3707 77.5999 49.8329 78.0621C50.2951 78.5243 50.922 78.784 51.5757 78.784C51.9025 78.784 52.2159 78.9138 52.4471 79.1449C52.6782 79.376 52.808 79.6895 52.808 80.0163C52.808 80.3431 52.6782 80.6566 52.4471 80.8877C52.2159 81.1188 51.9025 81.2486 51.5757 81.2486C50.6007 81.2486 49.6477 80.9595 48.8371 80.4179C48.0264 79.8763 47.3946 79.1064 47.0215 78.2057C46.6485 77.305 46.5508 76.3138 46.741 75.3576C46.9312 74.4014 47.4007 73.5231 48.0901 72.8337C48.7795 72.1443 49.6578 71.6749 50.614 71.4847C51.5702 71.2945 52.5613 71.3921 53.462 71.7652C54.3628 72.1383 55.1326 72.7701 55.6743 73.5807C56.2159 74.3913 56.505 75.3444 56.505 76.3193L56.505 88.6427C56.505 88.9695 56.3752 89.2829 56.1441 89.5141C55.913 89.7452 55.5995 89.875 55.2727 89.875C54.9458 89.875 54.6324 89.7452 54.4013 89.5141C54.1702 89.2829 54.0403 88.9695 54.0403 88.6427L54.0403 76.3193C54.0403 75.6656 53.7807 75.0387 53.3184 74.5765C52.8562 74.1143 52.2293 73.8546 51.5757 73.8546C50.922 73.8546 50.2951 74.1143 49.8329 74.5765C49.3707 75.0387 49.111 75.6656 49.111 76.3193ZM65.1314 89.875C64.8045 89.875 64.4911 89.7452 64.26 89.5141C64.0289 89.2829 63.899 88.9695 63.899 88.6427L63.899 63.8924C63.899 62.43 64.3327 61.0005 65.1451 59.7845C65.9576 58.5686 67.1124 57.6209 68.4635 57.0612C69.8146 56.5016 71.3012 56.3552 72.7355 56.6405C74.1698 56.9258 75.4873 57.63 76.5214 58.6641C77.5555 59.6981 78.2597 61.0156 78.545 62.4499C78.8303 63.8842 78.6839 65.3709 78.1242 66.722C77.5646 68.0731 76.6169 69.2279 75.4009 70.0403C74.185 70.8528 72.7554 71.2864 71.293 71.2864C70.9662 71.2864 70.6528 71.1566 70.4217 70.9255C70.1905 70.6944 70.0607 70.3809 70.0607 70.0541C70.0607 69.7273 70.1905 69.4138 70.4217 69.1827C70.6528 68.9516 70.9662 68.8218 71.293 68.8218C72.268 68.8218 73.221 68.5327 74.0316 67.991C74.8423 67.4494 75.4741 66.6795 75.8472 65.7788C76.2203 64.8781 76.3179 63.887 76.1277 62.9308C75.9375 61.9746 75.468 61.0962 74.7786 60.4068C74.0892 59.7175 73.2109 59.248 72.2547 59.0578C71.2985 58.8676 70.3074 58.9652 69.4067 59.3383C68.5059 59.7114 67.7361 60.3432 67.1944 61.1538C66.6528 61.9644 66.3637 62.9175 66.3637 63.8924L66.3637 88.6427C66.3637 88.9695 66.2339 89.2829 66.0028 89.5141C65.7717 89.7452 65.4582 89.875 65.1314 89.875Z"
            fill={theme.palette.primary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M94.6141 50.8123C94.6009 50.8543 94.5964 50.8986 94.601 50.9424C94.6055 50.9862 94.619 51.0286 94.6406 51.067C94.6621 51.1054 94.6913 51.1389 94.7263 51.1656C94.7613 51.1923 94.8014 51.2116 94.8441 51.2223L95.9295 51.5131C96.111 51.5617 96.2956 51.4518 96.3676 51.2779C96.7172 50.4466 97.4778 49.9764 98.5329 50.2591C99.4355 50.5009 100.141 51.1736 99.8499 52.259C99.6261 53.0944 99.0311 53.3467 98.097 53.7225C97.0392 54.1286 96.1367 54.692 95.8599 55.925L95.7873 56.2115C95.7656 56.2982 95.7788 56.39 95.8241 56.467C95.8694 56.5441 95.9432 56.6002 96.0295 56.6233L97.0965 56.9092C97.1838 56.9326 97.2767 56.9204 97.3549 56.8752C97.4331 56.83 97.4902 56.7557 97.5136 56.6684L97.5506 56.5303C97.8037 55.5857 98.2365 55.4069 99.4032 54.9313C100.368 54.5368 101.384 54.0845 101.765 52.6649C102.297 50.6769 100.876 49.2667 99.038 48.7742C97.3711 48.3276 95.337 48.6145 94.6141 50.8123ZM94.6309 58.9433C94.443 59.6445 94.8633 60.3127 95.6329 60.5189C96.4342 60.7336 97.1243 60.363 97.3122 59.6617C97.5068 58.9355 97.091 58.277 96.2898 58.0623C95.5215 57.8564 94.8255 58.217 94.6309 58.9433Z"
            fill={theme.palette.primary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M53.6058 20.9105C53.6039 20.9545 53.611 20.9984 53.6268 21.0395C53.6425 21.0807 53.6665 21.1181 53.6972 21.1496C53.728 21.1812 53.7648 21.206 53.8056 21.2228C53.8463 21.2395 53.89 21.2477 53.934 21.247H55.0577C55.2457 21.247 55.3955 21.0931 55.42 20.9064C55.5426 20.0129 56.1555 19.3619 57.2479 19.3619C58.1823 19.3619 59.0376 19.8291 59.0376 20.9528C59.0376 21.8177 58.5282 22.2154 57.7233 22.8201C56.8066 23.4862 56.0806 24.2639 56.1324 25.5265L56.1365 25.8221C56.1379 25.9115 56.1744 25.9967 56.2381 26.0594C56.3018 26.1221 56.3876 26.1572 56.477 26.1572H57.5816C57.6719 26.1572 57.7585 26.1213 57.8224 26.0574C57.8862 25.9936 57.9221 25.907 57.9221 25.8167V25.6736C57.9221 24.6957 58.294 24.411 59.2978 23.6496C60.1273 23.019 60.9922 22.3189 60.9922 20.8492C60.9922 18.7912 59.2542 17.7969 57.3514 17.7969C55.6257 17.7969 53.7352 18.6005 53.6058 20.9105ZM55.7265 28.7601C55.7265 29.486 56.3054 30.0227 57.1022 30.0227C57.9316 30.0227 58.5024 29.486 58.5024 28.7601C58.5024 28.0082 57.9303 27.4797 57.1008 27.4797C56.3054 27.4797 55.7265 28.0082 55.7265 28.7601Z"
            fill={theme.palette.primary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M14.8676 37.337C14.888 37.376 14.9162 37.4105 14.9503 37.4382C14.9845 37.466 15.024 37.4864 15.0664 37.4983C15.1088 37.5102 15.1532 37.5134 15.1968 37.5075C15.2404 37.5016 15.2824 37.4869 15.3201 37.4642L16.2933 36.9024C16.4561 36.8084 16.5088 36.6002 16.4368 36.4263C16.0962 35.5912 16.3015 34.7209 17.2475 34.1747C18.0567 33.7076 19.031 33.6845 19.5929 34.6576C20.0253 35.4066 19.783 36.0058 19.3883 36.932C18.9275 37.9672 18.6876 39.0037 19.3637 40.0713L19.5151 40.3252C19.561 40.4019 19.6352 40.4574 19.7217 40.4798C19.8082 40.5023 19.9001 40.4898 19.9775 40.4451L20.9341 39.8928C21.0123 39.8476 21.0694 39.7733 21.0928 39.686C21.1162 39.5988 21.1039 39.5059 21.0588 39.4276L20.9873 39.3038C20.4983 38.4569 20.678 38.0244 21.1666 36.8631C21.5697 35.9022 21.9686 34.8635 21.2338 33.5907C20.2048 31.8084 18.2025 31.8163 16.5546 32.7677C15.0601 33.6305 13.8247 35.2717 14.8676 37.337ZM20.629 43.0745C20.992 43.7032 21.7616 43.8785 22.4517 43.4801C23.17 43.0654 23.396 42.3153 23.033 41.6866C22.657 41.0355 21.8974 40.8638 21.179 41.2786C20.4901 41.6763 20.2531 42.4234 20.629 43.0745Z"
            fill={theme.palette.primary.main}
          />
        </g>
        <circle
          cx="59.5854"
          cy="167.355"
          r="5.24644"
          transform="rotate(-8.91147 59.5854 167.355)"
          stroke={theme.palette.primary.main}
          strokeWidth="3.09626"
        />
        <circle
          cx="107.167"
          cy="159.894"
          r="5.24644"
          transform="rotate(-8.91147 107.167 159.894)"
          stroke={theme.palette.primary.main}
          strokeWidth="3.09626"
        />
        <path
          d="M56.6494 140.308C56.5022 139.369 55.6221 138.728 54.6836 138.875C53.745 139.022 53.1035 139.902 53.2507 140.841L56.6494 140.308ZM63.8192 154.941L63.9823 156.654L63.8192 154.941ZM108.2 149.723C109.137 149.568 109.77 148.682 109.615 147.745C109.46 146.808 108.574 146.174 107.637 146.329L108.2 149.723ZM96.4282 134.158L95.8193 132.549L96.4282 134.158ZM102.78 128.025L101.264 127.212L101.264 127.212L102.78 128.025ZM23.5268 95.9655L22.1101 96.9411L23.5268 95.9655ZM44.2765 125.51L42.8642 126.492L44.2765 125.51ZM106.973 115.667L108.622 116.156L106.973 115.667ZM55.4125 140.61L55.1787 138.906L55.4125 140.61ZM53.7682 139.881L55.1849 138.905L53.7682 139.881ZM87.2479 88.0975L85.5315 87.9843L87.2479 88.0975ZM116.539 83.8574L118.189 84.3416L116.539 83.8574ZM84.1533 134.985L85.8697 135.098L84.1533 134.985ZM70.1375 137.168L71.7421 136.548L70.1375 137.168ZM111.529 100.327L109.88 99.8368L111.529 100.327ZM56.5703 150.736L54.9589 151.338L56.5703 150.736ZM53.2356 93.4165L54.8402 92.7967L53.2356 93.4165ZM51.6311 94.0364L68.533 137.788L71.7421 136.548L54.8402 92.7967L51.6311 94.0364ZM72.275 139.947L82.9698 138.27L82.4369 134.871L71.7421 136.548L72.275 139.947ZM85.8697 135.098L88.9643 88.2108L85.5315 87.9843L82.4369 134.871L85.8697 135.098ZM84.9985 84.5855L54.3073 89.3979L54.8402 92.7967L85.5315 87.9843L84.9985 84.5855ZM53.2507 140.841L54.8004 150.724L58.1991 150.191L56.6494 140.308L53.2507 140.841ZM54.9589 151.338C55.7559 153.472 58.5615 157.17 63.9823 156.654L63.656 153.229C60.2649 153.552 58.6239 151.319 58.1818 150.135L54.9589 151.338ZM63.9823 156.654C68.5891 156.215 95.4371 151.84 108.2 149.723L107.637 146.329C94.774 148.463 68.1072 152.805 63.656 153.229L63.9823 156.654ZM0.791855 87.7775L14.3372 85.6536L13.8043 82.2548L0.258927 84.3787L0.791855 87.7775ZM55.6462 142.314C62.238 141.41 71.8128 140.056 80.0871 138.797C84.2231 138.168 88.043 137.562 91.0059 137.046C92.4862 136.788 93.7637 136.551 94.7644 136.344C95.7178 136.147 96.5449 135.953 97.0372 135.766L95.8193 132.549C95.6234 132.623 95.0644 132.769 94.0674 132.975C93.1178 133.172 91.8806 133.402 90.416 133.657C87.4888 134.166 83.6969 134.768 79.5697 135.396C71.3178 136.651 61.7609 138.003 55.1787 138.906L55.6462 142.314ZM97.0372 135.766C98.9304 135.05 100.299 134.284 101.449 133.114C102.554 131.99 103.361 130.581 104.295 128.838L101.264 127.212C100.312 128.986 99.7102 129.975 98.9949 130.703C98.3241 131.385 97.4598 131.928 95.8193 132.549L97.0372 135.766ZM104.295 128.838C104.544 128.375 104.864 127.548 105.217 126.566C105.586 125.538 106.034 124.212 106.542 122.662C107.558 119.56 108.822 115.525 110.177 111.109C112.888 102.276 115.975 91.8899 118.189 84.3416L114.888 83.3731C112.676 90.9141 109.594 101.285 106.888 110.1C105.535 114.508 104.278 118.52 103.273 121.591C102.769 123.128 102.332 124.419 101.979 125.403C101.609 126.433 101.371 127.012 101.264 127.212L104.295 128.838ZM14.3372 85.6536L22.1101 96.9411L24.9436 94.9899L17.1707 83.7024L14.3372 85.6536ZM22.1101 96.9411L52.3514 140.856L55.1849 138.905L24.9436 94.9899L22.1101 96.9411ZM114.355 79.9824L23.2604 94.2661L23.7933 97.6649L114.887 83.3812L114.355 79.9824ZM36.519 111.34L109.88 99.8368L109.347 96.4381L35.9861 107.941L36.519 111.34ZM109.88 99.8368L105.324 115.177L108.622 116.156L113.178 100.816L109.88 99.8368ZM105.324 115.177L45.6888 124.528L46.2217 127.927L105.857 118.576L105.324 115.177ZM45.6888 124.528L36.519 111.34L33.6944 113.304L42.8642 126.492L45.6888 124.528ZM45.6888 124.528L45.6888 124.528L42.8642 126.492C43.6163 127.574 44.9202 128.131 46.2217 127.927L45.6888 124.528ZM105.324 115.177L105.857 118.576C107.168 118.37 108.244 117.429 108.622 116.156L105.324 115.177ZM35.9861 107.941C33.4767 108.335 32.2444 111.218 33.6944 113.304L36.519 111.34L35.9861 107.941ZM55.1787 138.906C55.1785 138.906 55.1797 138.905 55.1816 138.906C55.1834 138.906 55.1847 138.906 55.1856 138.907C55.1864 138.907 55.1868 138.908 55.1869 138.908C55.1871 138.908 55.1863 138.907 55.1849 138.905L52.3514 140.856C53.0845 141.921 54.3532 142.491 55.6462 142.314L55.1787 138.906ZM14.3372 85.6536L14.3372 85.6536L17.1707 83.7024C16.4202 82.6127 15.1114 82.0499 13.8043 82.2548L14.3372 85.6536ZM88.9643 88.2108C89.1095 86.0108 87.1768 84.244 84.9985 84.5855L85.5315 87.9843L85.5315 87.9843L88.9643 88.2108ZM118.189 84.3416C118.903 81.9104 116.835 79.5934 114.355 79.9824L114.887 83.3812C114.892 83.3805 114.894 83.3804 114.895 83.3804C114.896 83.3803 114.896 83.3804 114.896 83.3803C114.894 83.3801 114.891 83.3796 114.889 83.3787C114.887 83.378 114.886 83.3775 114.887 83.3779C114.888 83.3783 114.889 83.3794 114.89 83.3809C114.891 83.3816 114.892 83.3823 114.892 83.3828C114.892 83.3834 114.892 83.3837 114.892 83.3837C114.892 83.3836 114.892 83.382 114.891 83.3788C114.89 83.3752 114.89 83.3714 114.89 83.3681C114.89 83.3667 114.89 83.3661 114.89 83.3666C114.89 83.367 114.889 83.3692 114.888 83.3731L118.189 84.3416ZM82.9698 138.27C84.5593 138.021 85.7638 136.703 85.8697 135.098L82.4369 134.871L82.9698 138.27ZM68.533 137.788C69.1166 139.299 70.675 140.198 72.275 139.947L71.7421 136.548L71.7421 136.548L68.533 137.788ZM109.88 99.8368L113.178 100.816C113.898 98.3926 111.845 96.0464 109.347 96.4381L109.88 99.8368ZM54.8004 150.724C54.8284 150.903 54.875 151.114 54.9589 151.338L58.1818 150.135C58.1983 150.179 58.201 150.203 58.1991 150.191L54.8004 150.724ZM54.8402 92.7967L54.8402 92.7967L54.3073 89.3979C52.1407 89.7376 50.8408 91.9907 51.6311 94.0364L54.8402 92.7967Z"
          fill={theme.palette.primary.main}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M124.447 80.8975C128.868 80.8975 132.976 79.559 136.391 77.2698L150.359 90.6034L155.425 84.7277L141.947 71.8608C144.435 68.3567 145.901 64.0735 145.901 59.4505C145.901 47.6029 136.298 38 124.45 38C112.603 38 103 47.6029 103 59.4505C103 71.298 112.603 80.9009 124.45 80.9009L124.447 80.8975ZM142.743 59.447C142.743 69.4755 134.613 77.6061 124.584 77.6061C114.556 77.6061 106.425 69.4755 106.425 59.447C106.425 49.4185 114.556 41.2879 124.584 41.2879C134.613 41.2879 142.743 49.4185 142.743 59.447Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M127.815 59.4241L132.341 54.9143C132.767 54.4682 132.997 53.8744 132.99 53.2601C132.983 52.6457 132.733 52.0623 132.297 51.6264C131.861 51.194 131.271 50.9434 130.653 50.9366C130.035 50.9297 129.438 51.1596 128.988 51.5818L124.451 56.0915L119.924 51.5818C119.708 51.3518 119.444 51.1699 119.155 51.043C118.864 50.916 118.551 50.8473 118.236 50.8439C117.92 50.8405 117.604 50.8988 117.309 51.0155C117.014 51.1356 116.75 51.3107 116.523 51.5337C116.3 51.7568 116.121 52.0211 116.001 52.3128C115.881 52.6045 115.823 52.9169 115.826 53.2326C115.83 53.5484 115.898 53.8573 116.025 54.149C116.152 54.4373 116.338 54.6981 116.568 54.9143L121.101 59.4241L116.568 63.9338C116.338 64.15 116.152 64.4109 116.025 64.6992C115.898 64.9875 115.83 65.2998 115.826 65.6155C115.823 65.9313 115.881 66.2436 116.001 66.5353C116.121 66.8271 116.297 67.0913 116.523 67.3144C116.746 67.5375 117.014 67.7125 117.309 67.8327C117.604 67.9528 117.916 68.0111 118.236 68.0043C118.555 67.9974 118.867 67.9322 119.155 67.8052C119.447 67.6782 119.708 67.4963 119.924 67.2664L124.461 62.7566L128.999 67.2664C129.452 67.6611 130.039 67.8738 130.643 67.8532C131.247 67.8327 131.82 67.5855 132.245 67.1634C132.671 66.7378 132.918 66.1681 132.935 65.5675C132.952 64.9669 132.74 64.3834 132.338 63.9338L127.811 59.4241H127.815Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M150.355 90.6057L155.421 84.7266L156.183 85.4542C156.924 86.1612 157.367 87.1462 157.415 88.1998C157.463 89.25 157.113 90.2797 156.444 91.0587C155.771 91.8378 154.834 92.3046 153.836 92.3561C152.837 92.4075 151.859 92.0403 151.121 91.3333L150.359 90.6057H150.355Z"
          fill={theme.palette.primary.main}
        />
        <defs>
          <filter
            id="filter0_f_3356_19056"
            x="21.9589"
            y="172.75"
            width="134.922"
            height="23.5393"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.20319"
              result="effect1_foregroundBlur_3356_19056"
            />
          </filter>
          <clipPath id="clip0_3356_19056">
            <rect
              width="39.4348"
              height="39.4348"
              fill={theme.palette.primary.main}
              transform="translate(41.7168 89.875) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default NoItemsSvg;
