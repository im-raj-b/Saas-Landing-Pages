// src/components/Brands.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnsplash,
  faIntercom,
  faBuffer, // Use buffer for Descript
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const brands = [
  { name: "Unsplash", icon: faUnsplash },
  { name: "Notion", icon: faIntercom },
  { name: "Intercom", icon: faIntercom },
  { name: "Descript", icon: faBuffer },
  { name: "Grammarly", icon: faGoogle },
];

const Brands = () => {
  return (
    <div className="flex justify-center space-x-8 py-6">
      {/* {brands.map((brand, index) => (
        <div key={index} className="flex items-center space-x-2 text-gray-400">
          <FontAwesomeIcon icon={brand.icon} className="text-2xl" />
          <span className="text-lg font-medium">{brand.name}</span>
        </div>
      ))} */}
      <svg
        width="1076"
        height="38"
        viewBox="0 0 1076 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.2005 9.18182H64.1529V23.4361C64.1529 24.9986 63.7836 26.3729 63.0449 27.5589C62.3134 28.745 61.2836 29.6719 59.9554 30.3395C58.6273 31 57.0755 31.3303 55.2999 31.3303C53.5172 31.3303 51.9618 31 50.6337 30.3395C49.3056 29.6719 48.2757 28.745 47.5442 27.5589C46.8127 26.3729 46.4469 24.9986 46.4469 23.4361V9.18182H50.3993V23.1058C50.3993 24.0149 50.5982 24.8246 50.9959 25.5348C51.4007 26.245 51.9689 26.8026 52.7005 27.2074C53.432 27.6051 54.2985 27.804 55.2999 27.804C56.3013 27.804 57.1678 27.6051 57.8993 27.2074C58.638 26.8026 59.2061 26.245 59.6039 25.5348C60.0016 24.8246 60.2005 24.0149 60.2005 23.1058V9.18182ZM72.1349 21.4119V31H68.2784V14.6364H71.9645V17.4169H72.1562C72.5327 16.5007 73.1328 15.7727 73.9567 15.233C74.7876 14.6932 75.8139 14.4233 77.0355 14.4233C78.1648 14.4233 79.1484 14.6648 79.9865 15.1477C80.8317 15.6307 81.4851 16.3303 81.9467 17.2464C82.4155 18.1626 82.6463 19.2741 82.6392 20.581V31H78.7827V21.1776C78.7827 20.0838 78.4986 19.228 77.9304 18.6101C77.3693 17.9922 76.5916 17.6832 75.5973 17.6832C74.9226 17.6832 74.3224 17.8324 73.7969 18.1307C73.2784 18.4219 72.87 18.8445 72.5717 19.3984C72.2805 19.9524 72.1349 20.6236 72.1349 21.4119ZM99.4929 18.9616L95.9773 19.3452C95.8778 18.9901 95.7038 18.6562 95.4553 18.3438C95.2138 18.0312 94.8871 17.7791 94.4751 17.5874C94.0632 17.3956 93.5589 17.2997 92.9624 17.2997C92.1598 17.2997 91.4851 17.4737 90.9382 17.8217C90.3984 18.1697 90.1321 18.6207 90.1392 19.1747C90.1321 19.6506 90.3061 20.0376 90.6612 20.3359C91.0234 20.6342 91.62 20.8793 92.451 21.071L95.2422 21.6676C96.7905 22.0014 97.9411 22.5305 98.6939 23.255C99.4538 23.9794 99.8374 24.9276 99.8445 26.0994C99.8374 27.1293 99.5355 28.0384 98.9389 28.8267C98.3494 29.608 97.5291 30.2187 96.478 30.6591C95.4268 31.0994 94.2195 31.3196 92.8558 31.3196C90.853 31.3196 89.2408 30.9006 88.0192 30.0625C86.7976 29.2173 86.0696 28.0419 85.8352 26.5362L89.5959 26.174C89.7663 26.9126 90.1286 27.4702 90.6825 27.8466C91.2365 28.223 91.9574 28.4112 92.8452 28.4112C93.7614 28.4112 94.4964 28.223 95.0504 27.8466C95.6115 27.4702 95.892 27.005 95.892 26.451C95.892 25.9822 95.7109 25.5952 95.3487 25.2898C94.9936 24.9844 94.4396 24.75 93.6868 24.5866L90.8956 24.0007C89.326 23.674 88.1648 23.1236 87.4119 22.3494C86.6591 21.5682 86.2862 20.581 86.2933 19.3878C86.2862 18.3793 86.5597 17.5057 87.1136 16.767C87.6747 16.0213 88.4524 15.446 89.4467 15.0412C90.4482 14.6293 91.6023 14.4233 92.9091 14.4233C94.8267 14.4233 96.3359 14.8317 97.4368 15.6484C98.5447 16.4652 99.2301 17.5696 99.4929 18.9616ZM103.025 37.1364V14.6364H106.817V17.3423H107.041C107.24 16.9446 107.52 16.522 107.882 16.0746C108.245 15.62 108.735 15.233 109.353 14.9134C109.971 14.5866 110.759 14.4233 111.718 14.4233C112.982 14.4233 114.122 14.7464 115.137 15.3928C116.16 16.032 116.97 16.9801 117.566 18.2372C118.17 19.4872 118.472 21.0213 118.472 22.8395C118.472 24.6364 118.177 26.1634 117.588 27.4205C116.998 28.6776 116.196 29.6364 115.18 30.2969C114.164 30.9574 113.014 31.2876 111.728 31.2876C110.791 31.2876 110.013 31.1314 109.395 30.8189C108.777 30.5064 108.28 30.13 107.904 29.6896C107.534 29.2422 107.247 28.8196 107.041 28.4219H106.881V37.1364H103.025ZM106.806 22.8182C106.806 23.8764 106.956 24.8033 107.254 25.5987C107.559 26.3942 107.996 27.0156 108.564 27.4631C109.14 27.9034 109.836 28.1236 110.652 28.1236C111.505 28.1236 112.218 27.8963 112.794 27.4418C113.369 26.9801 113.802 26.3516 114.093 25.5561C114.392 24.7536 114.541 23.8409 114.541 22.8182C114.541 21.8026 114.395 20.9006 114.104 20.1122C113.813 19.3239 113.38 18.706 112.804 18.2585C112.229 17.8111 111.512 17.5874 110.652 17.5874C109.828 17.5874 109.129 17.804 108.554 18.2372C107.978 18.6705 107.542 19.2777 107.243 20.0589C106.952 20.8402 106.806 21.7599 106.806 22.8182ZM125.631 9.18182V31H121.775V9.18182H125.631ZM134.306 31.3303C133.269 31.3303 132.335 31.1456 131.504 30.7763C130.68 30.3999 130.026 29.8459 129.544 29.1143C129.068 28.3828 128.83 27.4808 128.83 26.4084C128.83 25.4851 129 24.7216 129.341 24.1179C129.682 23.5142 130.147 23.0312 130.737 22.669C131.326 22.3068 131.99 22.0334 132.729 21.8487C133.475 21.657 134.245 21.5185 135.041 21.4332C135.999 21.3338 136.777 21.245 137.374 21.1669C137.97 21.0817 138.404 20.9538 138.673 20.7834C138.95 20.6058 139.089 20.3324 139.089 19.9631V19.8991C139.089 19.0966 138.851 18.4751 138.375 18.0348C137.899 17.5945 137.214 17.3743 136.319 17.3743C135.374 17.3743 134.625 17.5803 134.071 17.9922C133.524 18.4041 133.155 18.8906 132.963 19.4517L129.362 18.9403C129.646 17.946 130.115 17.1151 130.769 16.4474C131.422 15.7727 132.221 15.2685 133.166 14.9347C134.11 14.5938 135.154 14.4233 136.298 14.4233C137.086 14.4233 137.871 14.5156 138.652 14.7003C139.433 14.8849 140.147 15.1903 140.794 15.6165C141.44 16.0355 141.958 16.6072 142.349 17.3317C142.747 18.0561 142.945 18.9616 142.945 20.0483V31H139.238V28.7521H139.11C138.876 29.2067 138.546 29.6328 138.119 30.0305C137.7 30.4212 137.171 30.7372 136.532 30.9787C135.9 31.2131 135.158 31.3303 134.306 31.3303ZM135.307 28.4964C136.081 28.4964 136.752 28.3437 137.32 28.0384C137.889 27.7259 138.325 27.3139 138.631 26.8026C138.943 26.2912 139.1 25.7337 139.1 25.13V23.2017C138.979 23.3011 138.773 23.3935 138.482 23.4787C138.198 23.5639 137.878 23.6385 137.523 23.7024C137.168 23.7663 136.816 23.8232 136.468 23.8729C136.12 23.9226 135.818 23.9652 135.563 24.0007C134.987 24.0788 134.472 24.2067 134.018 24.3842C133.563 24.5618 133.205 24.8104 132.942 25.13C132.679 25.4425 132.548 25.8473 132.548 26.3445C132.548 27.0547 132.807 27.5909 133.325 27.9531C133.844 28.3153 134.504 28.4964 135.307 28.4964ZM159.757 18.9616L156.241 19.3452C156.142 18.9901 155.968 18.6562 155.719 18.3438C155.477 18.0312 155.151 17.7791 154.739 17.5874C154.327 17.3956 153.823 17.2997 153.226 17.2997C152.423 17.2997 151.749 17.4737 151.202 17.8217C150.662 18.1697 150.396 18.6207 150.403 19.1747C150.396 19.6506 150.57 20.0376 150.925 20.3359C151.287 20.6342 151.884 20.8793 152.715 21.071L155.506 21.6676C157.054 22.0014 158.205 22.5305 158.958 23.255C159.718 23.9794 160.101 24.9276 160.108 26.0994C160.101 27.1293 159.799 28.0384 159.203 28.8267C158.613 29.608 157.793 30.2187 156.742 30.6591C155.691 31.0994 154.483 31.3196 153.119 31.3196C151.117 31.3196 149.504 30.9006 148.283 30.0625C147.061 29.2173 146.333 28.0419 146.099 26.5362L149.86 26.174C150.03 26.9126 150.392 27.4702 150.946 27.8466C151.5 28.223 152.221 28.4112 153.109 28.4112C154.025 28.4112 154.76 28.223 155.314 27.8466C155.875 27.4702 156.156 27.005 156.156 26.451C156.156 25.9822 155.975 25.5952 155.612 25.2898C155.257 24.9844 154.703 24.75 153.95 24.5866L151.159 24.0007C149.59 23.674 148.428 23.1236 147.676 22.3494C146.923 21.5682 146.55 20.581 146.557 19.3878C146.55 18.3793 146.823 17.5057 147.377 16.767C147.938 16.0213 148.716 15.446 149.71 15.0412C150.712 14.6293 151.866 14.4233 153.173 14.4233C155.09 14.4233 156.6 14.8317 157.7 15.6484C158.808 16.4652 159.494 17.5696 159.757 18.9616ZM167.145 21.4119V31H163.288V9.18182H167.059V17.4169H167.251C167.635 16.4936 168.228 15.7656 169.03 15.233C169.84 14.6932 170.87 14.4233 172.12 14.4233C173.256 14.4233 174.247 14.6612 175.092 15.1371C175.937 15.6129 176.591 16.3089 177.052 17.2251C177.521 18.1413 177.756 19.2599 177.756 20.581V31H173.899V21.1776C173.899 20.0767 173.615 19.2209 173.047 18.6101C172.486 17.9922 171.697 17.6832 170.682 17.6832C170 17.6832 169.389 17.8324 168.849 18.1307C168.317 18.4219 167.898 18.8445 167.592 19.3984C167.294 19.9524 167.145 20.6236 167.145 21.4119Z"
          fill="#A6A6A6"
        />
        <rect x="11" width="12" height="9" fill="#A6A6A6" />
        <rect y="23" width="34" height="9" fill="#A6A6A6" />
        <rect x="24" y="14" width="10" height="18" fill="#A6A6A6" />
        <rect y="14" width="10" height="18" fill="#A6A6A6" />
        <path
          d="M298.082 8.18182V30H294.566L284.286 15.1385H284.104V30H280.152V8.18182H283.689L293.959 23.054H294.151V8.18182H298.082ZM309.356 30.3196C307.758 30.3196 306.373 29.968 305.201 29.2649C304.029 28.5618 303.12 27.5781 302.474 26.3139C301.834 25.0497 301.515 23.5724 301.515 21.8821C301.515 20.1918 301.834 18.7109 302.474 17.4396C303.12 16.1683 304.029 15.1811 305.201 14.478C306.373 13.7749 307.758 13.4233 309.356 13.4233C310.954 13.4233 312.339 13.7749 313.51 14.478C314.682 15.1811 315.588 16.1683 316.227 17.4396C316.873 18.7109 317.197 20.1918 317.197 21.8821C317.197 23.5724 316.873 25.0497 316.227 26.3139C315.588 27.5781 314.682 28.5618 313.51 29.2649C312.339 29.968 310.954 30.3196 309.356 30.3196ZM309.377 27.2301C310.243 27.2301 310.968 26.9922 311.55 26.5163C312.133 26.0334 312.566 25.3871 312.85 24.5774C313.141 23.7678 313.287 22.8658 313.287 21.8714C313.287 20.87 313.141 19.9645 312.85 19.1548C312.566 18.3381 312.133 17.6882 311.55 17.2053C310.968 16.7223 310.243 16.4808 309.377 16.4808C308.489 16.4808 307.751 16.7223 307.161 17.2053C306.579 17.6882 306.142 18.3381 305.851 19.1548C305.567 19.9645 305.425 20.87 305.425 21.8714C305.425 22.8658 305.567 23.7678 305.851 24.5774C306.142 25.3871 306.579 26.0334 307.161 26.5163C307.751 26.9922 308.489 27.2301 309.377 27.2301ZM328.641 13.6364V16.6193H319.234V13.6364H328.641ZM321.556 9.71591H325.413V25.0781C325.413 25.5966 325.491 25.9943 325.647 26.2713C325.811 26.5412 326.024 26.7259 326.287 26.8253C326.549 26.9247 326.841 26.9744 327.16 26.9744C327.402 26.9744 327.622 26.9567 327.821 26.9212C328.027 26.8857 328.183 26.8537 328.289 26.8253L328.939 29.8402C328.733 29.9112 328.439 29.9893 328.055 30.0746C327.679 30.1598 327.217 30.2095 326.67 30.2237C325.704 30.2521 324.834 30.1065 324.06 29.7869C323.286 29.4602 322.672 28.956 322.217 28.2741C321.77 27.5923 321.549 26.7401 321.556 25.7173V9.71591ZM331.866 30V13.6364H335.723V30H331.866ZM333.805 11.3139C333.194 11.3139 332.669 11.1115 332.229 10.7067C331.788 10.2947 331.568 9.80114 331.568 9.22585C331.568 8.64347 331.788 8.14986 332.229 7.74503C332.669 7.3331 333.194 7.12713 333.805 7.12713C334.423 7.12713 334.949 7.3331 335.382 7.74503C335.822 8.14986 336.042 8.64347 336.042 9.22585C336.042 9.80114 335.822 10.2947 335.382 10.7067C334.949 11.1115 334.423 11.3139 333.805 11.3139ZM346.826 30.3196C345.228 30.3196 343.843 29.968 342.672 29.2649C341.5 28.5618 340.591 27.5781 339.944 26.3139C339.305 25.0497 338.985 23.5724 338.985 21.8821C338.985 20.1918 339.305 18.7109 339.944 17.4396C340.591 16.1683 341.5 15.1811 342.672 14.478C343.843 13.7749 345.228 13.4233 346.826 13.4233C348.424 13.4233 349.809 13.7749 350.981 14.478C352.153 15.1811 353.059 16.1683 353.698 17.4396C354.344 18.7109 354.667 20.1918 354.667 21.8821C354.667 23.5724 354.344 25.0497 353.698 26.3139C353.059 27.5781 352.153 28.5618 350.981 29.2649C349.809 29.968 348.424 30.3196 346.826 30.3196ZM346.848 27.2301C347.714 27.2301 348.439 26.9922 349.021 26.5163C349.603 26.0334 350.037 25.3871 350.321 24.5774C350.612 23.7678 350.757 22.8658 350.757 21.8714C350.757 20.87 350.612 19.9645 350.321 19.1548C350.037 18.3381 349.603 17.6882 349.021 17.2053C348.439 16.7223 347.714 16.4808 346.848 16.4808C345.96 16.4808 345.221 16.7223 344.632 17.2053C344.049 17.6882 343.613 18.3381 343.321 19.1548C343.037 19.9645 342.895 20.87 342.895 21.8714C342.895 22.8658 343.037 23.7678 343.321 24.5774C343.613 25.3871 344.049 26.0334 344.632 26.5163C345.221 26.9922 345.96 27.2301 346.848 27.2301ZM361.797 20.4119V30H357.941V13.6364H361.627V16.4169H361.818C362.195 15.5007 362.795 14.7727 363.619 14.233C364.45 13.6932 365.476 13.4233 366.698 13.4233C367.827 13.4233 368.811 13.6648 369.649 14.1477C370.494 14.6307 371.147 15.3303 371.609 16.2464C372.078 17.1626 372.308 18.2741 372.301 19.581V30H368.445V20.1776C368.445 19.0838 368.161 18.228 367.593 17.6101C367.031 16.9922 366.254 16.6832 365.259 16.6832C364.585 16.6832 363.985 16.8324 363.459 17.1307C362.941 17.4219 362.532 17.8445 362.234 18.3984C361.943 18.9524 361.797 19.6236 361.797 20.4119Z"
          fill="#A6A6A6"
        />
        <path
          d="M258.388 15.4545V30H256.044L249.19 20.0923H249.07V30H246.435V15.4545H248.793L255.639 25.3693H255.767V15.4545H258.388Z"
          fill="#A6A6A6"
        />
        <rect
          x="239"
          y="10"
          width="28"
          height="26"
          stroke="#A6A6A6"
          stroke-width="2"
        />
        <path
          d="M232.661 3L238.376 8H265.339L259.624 3H232.661Z"
          stroke="#A6A6A6"
          stroke-width="2"
        />
        <path d="M238 9L230 2V30L238 37V9Z" fill="#A6A6A6" />
        <path
          d="M471.104 8.18182V30H467.152V8.18182H471.104ZM493.314 8.18182V30H489.798L479.518 15.1385H479.337V30H475.384V8.18182H478.921L489.191 23.054H489.383V8.18182H493.314ZM496.662 11.495V8.18182H514.07V11.495H507.326V30H503.406V11.495H496.662ZM517.425 30V8.18182H531.616V11.495H521.378V17.4183H530.881V20.7315H521.378V26.6868H531.701V30H517.425ZM535.648 30V8.18182H543.83C545.506 8.18182 546.912 8.47301 548.049 9.0554C549.192 9.63778 550.055 10.4545 550.637 11.5057C551.227 12.5497 551.522 13.7678 551.522 15.1598C551.522 16.5589 551.223 17.7734 550.627 18.8033C550.037 19.826 549.167 20.6179 548.017 21.179C546.866 21.733 545.453 22.0099 543.777 22.0099H537.949V18.7287H543.244C544.224 18.7287 545.027 18.5937 545.652 18.3239C546.277 18.0469 546.738 17.6456 547.037 17.12C547.342 16.5874 547.495 15.9339 547.495 15.1598C547.495 14.3857 547.342 13.7251 547.037 13.1783C546.731 12.6243 546.266 12.2053 545.641 11.9212C545.016 11.63 544.21 11.4844 543.223 11.4844H539.6V30H535.648ZM546.919 20.1136L552.321 30H547.91L542.605 20.1136H546.919ZM573.835 15.5433H569.851C569.737 14.8899 569.528 14.3111 569.222 13.8068C568.917 13.2955 568.537 12.8622 568.082 12.5071C567.628 12.152 567.109 11.8857 566.527 11.7081C565.952 11.5234 565.33 11.4311 564.663 11.4311C563.477 11.4311 562.425 11.7294 561.509 12.326C560.593 12.9155 559.876 13.782 559.357 14.9254C558.839 16.0618 558.58 17.4503 558.58 19.0909C558.58 20.7599 558.839 22.1662 559.357 23.3097C559.883 24.446 560.6 25.3054 561.509 25.8878C562.425 26.4631 563.473 26.7507 564.652 26.7507C565.305 26.7507 565.916 26.6655 566.484 26.495C567.06 26.3175 567.575 26.0582 568.029 25.7173C568.491 25.3764 568.878 24.9574 569.19 24.4602C569.51 23.9631 569.73 23.3949 569.851 22.7557L573.835 22.777C573.686 23.8139 573.363 24.7869 572.866 25.696C572.376 26.6051 571.733 27.4077 570.938 28.1037C570.142 28.7926 569.212 29.3324 568.146 29.723C567.081 30.1065 565.898 30.2983 564.599 30.2983C562.681 30.2983 560.969 29.8544 559.464 28.9666C557.958 28.0788 556.772 26.7969 555.906 25.1207C555.039 23.4446 554.606 21.4347 554.606 19.0909C554.606 16.7401 555.043 14.7301 555.916 13.0611C556.79 11.3849 557.979 10.103 559.485 9.2152C560.991 8.32741 562.695 7.88352 564.599 7.88352C565.813 7.88352 566.942 8.05398 567.987 8.39489C569.031 8.7358 569.961 9.23651 570.778 9.89702C571.594 10.5504 572.266 11.353 572.791 12.3047C573.324 13.2493 573.672 14.3288 573.835 15.5433ZM596.95 19.0909C596.95 21.4418 596.51 23.4553 595.629 25.1314C594.756 26.8004 593.563 28.0788 592.05 28.9666C590.544 29.8544 588.836 30.2983 586.926 30.2983C585.015 30.2983 583.303 29.8544 581.791 28.9666C580.285 28.0717 579.092 26.7898 578.211 25.1207C577.338 23.4446 576.901 21.4347 576.901 19.0909C576.901 16.7401 577.338 14.7301 578.211 13.0611C579.092 11.3849 580.285 10.103 581.791 9.2152C583.303 8.32741 585.015 7.88352 586.926 7.88352C588.836 7.88352 590.544 8.32741 592.05 9.2152C593.563 10.103 594.756 11.3849 595.629 13.0611C596.51 14.7301 596.95 16.7401 596.95 19.0909ZM592.977 19.0909C592.977 17.4361 592.718 16.0405 592.199 14.9041C591.688 13.7607 590.977 12.8977 590.068 12.3153C589.159 11.7259 588.112 11.4311 586.926 11.4311C585.74 11.4311 584.692 11.7259 583.783 12.3153C582.874 12.8977 582.16 13.7607 581.642 14.9041C581.13 16.0405 580.874 17.4361 580.874 19.0909C580.874 20.7457 581.13 22.1449 581.642 23.2884C582.16 24.4247 582.874 25.2876 583.783 25.8771C584.692 26.4595 585.74 26.7507 586.926 26.7507C588.112 26.7507 589.159 26.4595 590.068 25.8771C590.977 25.2876 591.688 24.4247 592.199 23.2884C592.718 22.1449 592.977 20.7457 592.977 19.0909ZM600.687 8.18182H605.524L612.001 23.9915H612.257L618.734 8.18182H623.571V30H619.778V15.0107H619.576L613.546 29.9361H610.712L604.682 14.9787H604.48V30H600.687V8.18182Z"
          fill="#A6A6A6"
        />
        <rect x="425" y="4" width="30" height="30" rx="3" fill="#A6A6A6" />
        <rect x="429" y="11" width="2" height="12" fill="white" />
        <rect x="434" y="8" width="2" height="18" fill="white" />
        <rect x="439" y="8" width="2" height="18" fill="white" />
        <rect x="444" y="8" width="2" height="18" fill="white" />
        <path
          d="M430 28C432.833 30.2639 441 33.4333 451 28"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <rect x="449" y="11" width="2" height="12" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M693.071 5.41723C694.946 6.32466 696 7.5554 696 8.83871H686L676 8.83871C676 7.5554 677.054 6.32466 678.929 5.41722C680.804 4.50979 683.348 4 686 4C688.652 4 691.196 4.50979 693.071 5.41723ZM678.929 32.5828C677.054 31.6753 676 30.4446 676 29.1613H686L696 29.1613C696 30.4446 694.946 31.6753 693.071 32.5828C691.196 33.4902 688.652 34 686 34C683.348 34 680.804 33.4902 678.929 32.5828ZM699 21.4194V25.2903H693V21.4194H699ZM682 12.7097H676V16.5806H682V12.7097ZM687 12.7097H699V16.5806H687V12.7097ZM688 21.4194H676V25.2903H688V21.4194Z"
          fill="#A6A6A6"
        />
        <path
          d="M717.054 30.2876C715.768 30.2876 714.618 29.9574 713.602 29.2969C712.587 28.6364 711.784 27.6776 711.195 26.4205C710.605 25.1634 710.31 23.6364 710.31 21.8395C710.31 20.0213 710.609 18.4872 711.205 17.2372C711.809 15.9801 712.622 15.032 713.645 14.3928C714.668 13.7464 715.808 13.4233 717.065 13.4233C718.023 13.4233 718.812 13.5866 719.43 13.9134C720.048 14.233 720.538 14.62 720.9 15.0746C721.262 15.522 721.543 15.9446 721.741 16.3423H721.901V8.18182H725.768V30H721.976V27.4219H721.741C721.543 27.8196 721.255 28.2422 720.879 28.6896C720.502 29.13 720.005 29.5064 719.387 29.8189C718.769 30.1314 717.991 30.2876 717.054 30.2876ZM718.13 27.1236C718.947 27.1236 719.643 26.9034 720.218 26.4631C720.793 26.0156 721.23 25.3942 721.528 24.5987C721.827 23.8033 721.976 22.8764 721.976 21.8182C721.976 20.7599 721.827 19.8402 721.528 19.0589C721.237 18.2777 720.804 17.6705 720.229 17.2372C719.661 16.804 718.961 16.5874 718.13 16.5874C717.271 16.5874 716.553 16.8111 715.978 17.2585C715.403 17.706 714.969 18.3239 714.678 19.1122C714.387 19.9006 714.241 20.8026 714.241 21.8182C714.241 22.8409 714.387 23.7536 714.678 24.5561C714.977 25.3516 715.413 25.9801 715.989 26.4418C716.571 26.8963 717.285 27.1236 718.13 27.1236ZM737.122 30.3196C735.482 30.3196 734.065 29.9787 732.872 29.2969C731.686 28.608 730.773 27.6349 730.134 26.3778C729.494 25.1136 729.175 23.6257 729.175 21.9141C729.175 20.2308 729.494 18.7536 730.134 17.4822C730.78 16.2038 731.682 15.2095 732.84 14.4993C733.997 13.782 735.357 13.4233 736.92 13.4233C737.928 13.4233 738.88 13.5866 739.775 13.9134C740.677 14.233 741.472 14.7301 742.161 15.4048C742.857 16.0795 743.404 16.9389 743.802 17.983C744.2 19.0199 744.399 20.2557 744.399 21.6903V22.8729H730.986V20.2734H740.702C740.695 19.5348 740.535 18.8778 740.222 18.3026C739.91 17.7202 739.473 17.2621 738.912 16.9283C738.358 16.5945 737.712 16.4276 736.973 16.4276C736.185 16.4276 735.492 16.6193 734.896 17.0028C734.299 17.3793 733.834 17.8764 733.5 18.4943C733.173 19.1051 733.007 19.7763 732.999 20.5078V22.777C732.999 23.7287 733.173 24.5455 733.521 25.2273C733.869 25.902 734.356 26.4205 734.981 26.7827C735.606 27.1378 736.338 27.3153 737.176 27.3153C737.737 27.3153 738.244 27.2372 738.699 27.081C739.154 26.9176 739.548 26.6797 739.882 26.3672C740.215 26.0547 740.468 25.6676 740.638 25.206L744.239 25.6108C744.012 26.5625 743.578 27.3935 742.939 28.1037C742.307 28.8068 741.497 29.3537 740.51 29.7443C739.523 30.1278 738.394 30.3196 737.122 30.3196ZM760.594 17.9616L757.079 18.3452C756.979 17.9901 756.805 17.6562 756.557 17.3438C756.315 17.0312 755.989 16.7791 755.577 16.5874C755.165 16.3956 754.661 16.2997 754.064 16.2997C753.261 16.2997 752.587 16.4737 752.04 16.8217C751.5 17.1697 751.234 17.6207 751.241 18.1747C751.234 18.6506 751.408 19.0376 751.763 19.3359C752.125 19.6342 752.722 19.8793 753.553 20.071L756.344 20.6676C757.892 21.0014 759.043 21.5305 759.795 22.255C760.555 22.9794 760.939 23.9276 760.946 25.0994C760.939 26.1293 760.637 27.0384 760.04 27.8267C759.451 28.608 758.631 29.2187 757.58 29.6591C756.528 30.0994 755.321 30.3196 753.957 30.3196C751.955 30.3196 750.342 29.9006 749.121 29.0625C747.899 28.2173 747.171 27.0419 746.937 25.5362L750.697 25.174C750.868 25.9126 751.23 26.4702 751.784 26.8466C752.338 27.223 753.059 27.4112 753.947 27.4112C754.863 27.4112 755.598 27.223 756.152 26.8466C756.713 26.4702 756.994 26.005 756.994 25.451C756.994 24.9822 756.813 24.5952 756.45 24.2898C756.095 23.9844 755.541 23.75 754.788 23.5866L751.997 23.0007C750.428 22.674 749.266 22.1236 748.513 21.3494C747.761 20.5682 747.388 19.581 747.395 18.3878C747.388 17.3793 747.661 16.5057 748.215 15.767C748.776 15.0213 749.554 14.446 750.548 14.0412C751.55 13.6293 752.704 13.4233 754.011 13.4233C755.928 13.4233 757.438 13.8317 758.538 14.6484C759.646 15.4652 760.332 16.5696 760.594 17.9616ZM771.264 30.3196C769.63 30.3196 768.228 29.9609 767.056 29.2436C765.891 28.5263 764.993 27.5355 764.36 26.2713C763.735 25 763.423 23.5369 763.423 21.8821C763.423 20.2202 763.743 18.7536 764.382 17.4822C765.021 16.2038 765.923 15.2095 767.088 14.4993C768.26 13.782 769.645 13.4233 771.243 13.4233C772.571 13.4233 773.746 13.6683 774.769 14.1584C775.799 14.6413 776.619 15.3267 777.23 16.2145C777.841 17.0952 778.189 18.125 778.274 19.304H774.588C774.439 18.5156 774.083 17.8587 773.522 17.3331C772.968 16.8004 772.226 16.5341 771.296 16.5341C770.507 16.5341 769.815 16.7472 769.218 17.1733C768.622 17.5923 768.157 18.196 767.823 18.9844C767.496 19.7727 767.333 20.7173 767.333 21.8182C767.333 22.9332 767.496 23.892 767.823 24.6946C768.15 25.4901 768.608 26.1044 769.197 26.5376C769.794 26.9638 770.493 27.1768 771.296 27.1768C771.864 27.1768 772.372 27.0703 772.819 26.8572C773.274 26.6371 773.654 26.321 773.959 25.9091C774.265 25.4972 774.474 24.9964 774.588 24.407H778.274C778.181 25.5646 777.841 26.5909 777.251 27.4858C776.662 28.3736 775.859 29.0696 774.843 29.5739C773.828 30.071 772.635 30.3196 771.264 30.3196ZM781.441 30V13.6364H785.18V16.3636H785.35C785.649 15.419 786.16 14.6911 786.884 14.1797C787.616 13.6612 788.45 13.402 789.388 13.402C789.601 13.402 789.839 13.4126 790.102 13.4339C790.372 13.4482 790.595 13.473 790.773 13.5085V17.0561C790.61 16.9993 790.35 16.9496 789.995 16.907C789.647 16.8572 789.31 16.8324 788.983 16.8324C788.28 16.8324 787.648 16.9851 787.087 17.2905C786.533 17.5888 786.096 18.0043 785.776 18.5369C785.457 19.0696 785.297 19.6839 785.297 20.38V30H781.441ZM793.335 30V13.6364H797.192V30H793.335ZM795.274 11.3139C794.663 11.3139 794.138 11.1115 793.697 10.7067C793.257 10.2947 793.037 9.80114 793.037 9.22585C793.037 8.64347 793.257 8.14986 793.697 7.74503C794.138 7.3331 794.663 7.12713 795.274 7.12713C795.892 7.12713 796.417 7.3331 796.851 7.74503C797.291 8.14986 797.511 8.64347 797.511 9.22585C797.511 9.80114 797.291 10.2947 796.851 10.7067C796.417 11.1115 795.892 11.3139 795.274 11.3139ZM801.157 36.1364V13.6364H804.95V16.3423H805.174C805.373 15.9446 805.653 15.522 806.015 15.0746C806.377 14.62 806.868 14.233 807.485 13.9134C808.103 13.5866 808.892 13.4233 809.85 13.4233C811.115 13.4233 812.255 13.7464 813.27 14.3928C814.293 15.032 815.103 15.9801 815.699 17.2372C816.303 18.4872 816.605 20.0213 816.605 21.8395C816.605 23.6364 816.31 25.1634 815.721 26.4205C815.131 27.6776 814.328 28.6364 813.313 29.2969C812.297 29.9574 811.147 30.2876 809.861 30.2876C808.924 30.2876 808.146 30.1314 807.528 29.8189C806.91 29.5064 806.413 29.13 806.037 28.6896C805.667 28.2422 805.38 27.8196 805.174 27.4219H805.014V36.1364H801.157ZM804.939 21.8182C804.939 22.8764 805.088 23.8033 805.387 24.5987C805.692 25.3942 806.129 26.0156 806.697 26.4631C807.272 26.9034 807.968 27.1236 808.785 27.1236C809.637 27.1236 810.351 26.8963 810.926 26.4418C811.502 25.9801 811.935 25.3516 812.226 24.5561C812.525 23.7536 812.674 22.8409 812.674 21.8182C812.674 20.8026 812.528 19.9006 812.237 19.1122C811.946 18.3239 811.512 17.706 810.937 17.2585C810.362 16.8111 809.645 16.5874 808.785 16.5874C807.961 16.5874 807.262 16.804 806.686 17.2372C806.111 17.6705 805.674 18.2777 805.376 19.0589C805.085 19.8402 804.939 20.7599 804.939 21.8182ZM828.078 13.6364V16.6193H818.672V13.6364H828.078ZM820.994 9.71591H824.85V25.0781C824.85 25.5966 824.929 25.9943 825.085 26.2713C825.248 26.5412 825.461 26.7259 825.724 26.8253C825.987 26.9247 826.278 26.9744 826.598 26.9744C826.839 26.9744 827.059 26.9567 827.258 26.9212C827.464 26.8857 827.62 26.8537 827.727 26.8253L828.377 29.8402C828.171 29.9112 827.876 29.9893 827.493 30.0746C827.116 30.1598 826.654 30.2095 826.108 30.2237C825.142 30.2521 824.272 30.1065 823.498 29.7869C822.723 29.4602 822.109 28.956 821.654 28.2741C821.207 27.5923 820.987 26.7401 820.994 25.7173V9.71591Z"
          fill="#A6A6A6"
        />
        <circle cx="895" cy="19" r="15" fill="#A6A6A6" />
        <path
          d="M901 19C901 22.866 897.866 26 894 26C890.134 26 887 22.866 887 19C887 15.134 890.134 12 894 12C895.959 12 897.729 12.8045 899 14.101"
          stroke="white"
          stroke-width="2"
        />
        <path d="M897 21L901 19L903.5 22.5" stroke="white" stroke-width="2" />
        <path
          d="M929.098 36.4773C927.713 36.4773 926.523 36.2891 925.529 35.9126C924.535 35.5433 923.736 35.0462 923.132 34.4212C922.528 33.7962 922.109 33.1037 921.875 32.3438L925.348 31.5021C925.504 31.8217 925.732 32.1378 926.03 32.4503C926.328 32.7699 926.729 33.0327 927.234 33.2386C927.745 33.4517 928.388 33.5582 929.162 33.5582C930.256 33.5582 931.161 33.2919 931.879 32.7592C932.596 32.2337 932.955 31.3672 932.955 30.1598V27.0597H932.763C932.564 27.4574 932.273 27.8658 931.889 28.2848C931.513 28.7038 931.012 29.0554 930.387 29.3395C929.769 29.6236 928.991 29.7656 928.054 29.7656C926.797 29.7656 925.657 29.4709 924.634 28.8814C923.619 28.2848 922.809 27.397 922.205 26.218C921.609 25.032 921.31 23.5476 921.31 21.7649C921.31 19.968 921.609 18.4517 922.205 17.2159C922.809 15.973 923.622 15.032 924.645 14.3928C925.668 13.7464 926.808 13.4233 928.065 13.4233C929.023 13.4233 929.812 13.5866 930.43 13.9134C931.055 14.233 931.552 14.62 931.921 15.0746C932.29 15.522 932.571 15.9446 932.763 16.3423H932.976V13.6364H936.779V30.2663C936.779 31.6655 936.445 32.8232 935.778 33.7393C935.11 34.6555 934.197 35.3409 933.04 35.7955C931.882 36.25 930.568 36.4773 929.098 36.4773ZM929.13 26.7401C929.947 26.7401 930.643 26.5412 931.218 26.1435C931.793 25.7457 932.23 25.174 932.528 24.4283C932.827 23.6825 932.976 22.7876 932.976 21.7436C932.976 20.7138 932.827 19.8118 932.528 19.0376C932.237 18.2635 931.804 17.6634 931.229 17.2372C930.661 16.804 929.961 16.5874 929.13 16.5874C928.271 16.5874 927.553 16.8111 926.978 17.2585C926.403 17.706 925.969 18.3203 925.678 19.1016C925.387 19.8757 925.241 20.7564 925.241 21.7436C925.241 22.745 925.387 23.6222 925.678 24.375C925.977 25.1207 926.413 25.7031 926.989 26.1222C927.571 26.5341 928.285 26.7401 929.13 26.7401ZM940.732 30V13.6364H944.471V16.3636H944.641C944.94 15.419 945.451 14.6911 946.175 14.1797C946.907 13.6612 947.741 13.402 948.679 13.402C948.892 13.402 949.13 13.4126 949.393 13.4339C949.663 13.4482 949.886 13.473 950.064 13.5085V17.0561C949.901 16.9993 949.641 16.9496 949.286 16.907C948.938 16.8572 948.601 16.8324 948.274 16.8324C947.571 16.8324 946.939 16.9851 946.378 17.2905C945.824 17.5888 945.387 18.0043 945.067 18.5369C944.748 19.0696 944.588 19.6839 944.588 20.38V30H940.732ZM957.042 30.3303C956.005 30.3303 955.071 30.1456 954.24 29.7763C953.416 29.3999 952.763 28.8459 952.28 28.1143C951.804 27.3828 951.566 26.4808 951.566 25.4084C951.566 24.4851 951.737 23.7216 952.077 23.1179C952.418 22.5142 952.884 22.0312 953.473 21.669C954.063 21.3068 954.727 21.0334 955.465 20.8487C956.211 20.657 956.982 20.5185 957.777 20.4332C958.736 20.3338 959.513 20.245 960.11 20.1669C960.707 20.0817 961.14 19.9538 961.41 19.7834C961.687 19.6058 961.825 19.3324 961.825 18.9631V18.8991C961.825 18.0966 961.587 17.4751 961.112 17.0348C960.636 16.5945 959.95 16.3743 959.055 16.3743C958.111 16.3743 957.362 16.5803 956.808 16.9922C956.261 17.4041 955.891 17.8906 955.7 18.4517L952.099 17.9403C952.383 16.946 952.852 16.1151 953.505 15.4474C954.158 14.7727 954.957 14.2685 955.902 13.9347C956.847 13.5938 957.891 13.4233 959.034 13.4233C959.822 13.4233 960.607 13.5156 961.388 13.7003C962.17 13.8849 962.884 14.1903 963.53 14.6165C964.176 15.0355 964.695 15.6072 965.085 16.3317C965.483 17.0561 965.682 17.9616 965.682 19.0483V30H961.974V27.7521H961.847C961.612 28.2067 961.282 28.6328 960.856 29.0305C960.437 29.4212 959.908 29.7372 959.268 29.9787C958.636 30.2131 957.894 30.3303 957.042 30.3303ZM958.043 27.4964C958.817 27.4964 959.489 27.3437 960.057 27.0384C960.625 26.7259 961.062 26.3139 961.367 25.8026C961.68 25.2912 961.836 24.7337 961.836 24.13V22.2017C961.715 22.3011 961.509 22.3935 961.218 22.4787C960.934 22.5639 960.614 22.6385 960.259 22.7024C959.904 22.7663 959.553 22.8232 959.205 22.8729C958.857 22.9226 958.555 22.9652 958.299 23.0007C957.724 23.0788 957.209 23.2067 956.754 23.3842C956.3 23.5618 955.941 23.8104 955.678 24.13C955.415 24.4425 955.284 24.8473 955.284 25.3445C955.284 26.0547 955.543 26.5909 956.062 26.9531C956.58 27.3153 957.241 27.4964 958.043 27.4964ZM969.56 30V13.6364H973.246V16.4169H973.438C973.778 15.4794 974.343 14.7479 975.131 14.2223C975.92 13.6896 976.861 13.4233 977.955 13.4233C979.062 13.4233 979.996 13.6932 980.756 14.233C981.523 14.7656 982.063 15.4936 982.376 16.4169H982.546C982.908 15.5078 983.519 14.7834 984.379 14.2436C985.245 13.6967 986.271 13.4233 987.457 13.4233C988.963 13.4233 990.192 13.8991 991.143 14.8509C992.095 15.8026 992.571 17.1911 992.571 19.0163V30H988.704V19.6129C988.704 18.5973 988.434 17.8551 987.894 17.3864C987.354 16.9105 986.694 16.6726 985.913 16.6726C984.982 16.6726 984.254 16.9638 983.729 17.5462C983.21 18.1214 982.951 18.8707 982.951 19.794V30H979.169V19.4531C979.169 18.608 978.913 17.9332 978.402 17.429C977.898 16.9247 977.237 16.6726 976.42 16.6726C975.866 16.6726 975.362 16.8146 974.908 17.0987C974.453 17.3757 974.091 17.7699 973.821 18.2812C973.551 18.7855 973.416 19.375 973.416 20.0497V30H969.56ZM996.483 30V13.6364H1000.17V16.4169H1000.36C1000.7 15.4794 1001.27 14.7479 1002.06 14.2223C1002.84 13.6896 1003.78 13.4233 1004.88 13.4233C1005.99 13.4233 1006.92 13.6932 1007.68 14.233C1008.45 14.7656 1008.99 15.4936 1009.3 16.4169H1009.47C1009.83 15.5078 1010.44 14.7834 1011.3 14.2436C1012.17 13.6967 1013.2 13.4233 1014.38 13.4233C1015.89 13.4233 1017.12 13.8991 1018.07 14.8509C1019.02 15.8026 1019.49 17.1911 1019.49 19.0163V30H1015.63V19.6129C1015.63 18.5973 1015.36 17.8551 1014.82 17.3864C1014.28 16.9105 1013.62 16.6726 1012.84 16.6726C1011.91 16.6726 1011.18 16.9638 1010.65 17.5462C1010.13 18.1214 1009.87 18.8707 1009.87 19.794V30H1006.09V19.4531C1006.09 18.608 1005.84 17.9332 1005.33 17.429C1004.82 16.9247 1004.16 16.6726 1003.34 16.6726C1002.79 16.6726 1002.29 16.8146 1001.83 17.0987C1001.38 17.3757 1001.01 17.7699 1000.74 18.2812C1000.47 18.7855 1000.34 19.375 1000.34 20.0497V30H996.483ZM1028.12 30.3303C1027.08 30.3303 1026.15 30.1456 1025.31 29.7763C1024.49 29.3999 1023.84 28.8459 1023.35 28.1143C1022.88 27.3828 1022.64 26.4808 1022.64 25.4084C1022.64 24.4851 1022.81 23.7216 1023.15 23.1179C1023.49 22.5142 1023.96 22.0312 1024.55 21.669C1025.14 21.3068 1025.8 21.0334 1026.54 20.8487C1027.29 20.657 1028.06 20.5185 1028.85 20.4332C1029.81 20.3338 1030.59 20.245 1031.18 20.1669C1031.78 20.0817 1032.21 19.9538 1032.48 19.7834C1032.76 19.6058 1032.9 19.3324 1032.9 18.9631V18.8991C1032.9 18.0966 1032.66 17.4751 1032.19 17.0348C1031.71 16.5945 1031.02 16.3743 1030.13 16.3743C1029.19 16.3743 1028.44 16.5803 1027.88 16.9922C1027.33 17.4041 1026.97 17.8906 1026.77 18.4517L1023.17 17.9403C1023.46 16.946 1023.93 16.1151 1024.58 15.4474C1025.23 14.7727 1026.03 14.2685 1026.98 13.9347C1027.92 13.5938 1028.96 13.4233 1030.11 13.4233C1030.9 13.4233 1031.68 13.5156 1032.46 13.7003C1033.24 13.8849 1033.96 14.1903 1034.6 14.6165C1035.25 15.0355 1035.77 15.6072 1036.16 16.3317C1036.56 17.0561 1036.76 17.9616 1036.76 19.0483V30H1033.05V27.7521H1032.92C1032.69 28.2067 1032.36 28.6328 1031.93 29.0305C1031.51 29.4212 1030.98 29.7372 1030.34 29.9787C1029.71 30.2131 1028.97 30.3303 1028.12 30.3303ZM1029.12 27.4964C1029.89 27.4964 1030.56 27.3437 1031.13 27.0384C1031.7 26.7259 1032.14 26.3139 1032.44 25.8026C1032.75 25.2912 1032.91 24.7337 1032.91 24.13V22.2017C1032.79 22.3011 1032.58 22.3935 1032.29 22.4787C1032.01 22.5639 1031.69 22.6385 1031.33 22.7024C1030.98 22.7663 1030.63 22.8232 1030.28 22.8729C1029.93 22.9226 1029.63 22.9652 1029.37 23.0007C1028.8 23.0788 1028.28 23.2067 1027.83 23.3842C1027.37 23.5618 1027.02 23.8104 1026.75 24.13C1026.49 24.4425 1026.36 24.8473 1026.36 25.3445C1026.36 26.0547 1026.62 26.5909 1027.14 26.9531C1027.65 27.3153 1028.31 27.4964 1029.12 27.4964ZM1040.63 30V13.6364H1044.37V16.3636H1044.54C1044.84 15.419 1045.35 14.6911 1046.08 14.1797C1046.81 13.6612 1047.64 13.402 1048.58 13.402C1048.79 13.402 1049.03 13.4126 1049.3 13.4339C1049.56 13.4482 1049.79 13.473 1049.97 13.5085V17.0561C1049.8 16.9993 1049.54 16.9496 1049.19 16.907C1048.84 16.8572 1048.5 16.8324 1048.18 16.8324C1047.47 16.8324 1046.84 16.9851 1046.28 17.2905C1045.73 17.5888 1045.29 18.0043 1044.97 18.5369C1044.65 19.0696 1044.49 19.6839 1044.49 20.38V30H1040.63ZM1056.38 8.18182V30H1052.53V8.18182H1056.38ZM1062.75 36.1364C1062.22 36.1364 1061.74 36.0938 1061.29 36.0085C1060.85 35.9304 1060.5 35.8381 1060.23 35.7315L1061.13 32.7273C1061.69 32.8906 1062.19 32.9688 1062.63 32.9616C1063.07 32.9545 1063.46 32.8161 1063.79 32.5462C1064.13 32.2834 1064.42 31.843 1064.65 31.2251L1064.98 30.3409L1059.05 13.6364H1063.14L1066.91 25.9943H1067.08L1070.87 13.6364H1074.97L1068.42 31.9815C1068.11 32.848 1067.71 33.5902 1067.2 34.2081C1066.7 34.8331 1066.08 35.3089 1065.35 35.6357C1064.62 35.9695 1063.76 36.1364 1062.75 36.1364Z"
          fill="#A6A6A6"
        />
      </svg>
    </div>
  );
};

export default Brands;
