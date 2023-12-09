import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__top-box">
                    <div className="footer__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="38" viewBox="0 0 229 38" fill="none">
                            <path d="M15.2013 37.1585C13.8925 37.1585 12.8938 36.8059 12.2049 36.1007C11.5161 35.3955 11.1717 34.3881 11.1717 33.0785V18.4711L12.8249 22.9541L0.632849 6.07998C0.150678 5.3748 -0.0559663 4.61924 0.0129153 3.81332C0.0817968 2.97381 0.426205 2.25183 1.04614 1.64739C1.66607 1.04294 2.54431 0.740723 3.68086 0.740723C4.50744 0.740723 5.24791 0.942205 5.90229 1.34517C6.5911 1.74813 7.24548 2.38615 7.86541 3.25924L16.1312 14.8948H14.478L22.7438 3.25924C23.3982 2.35257 24.0354 1.71455 24.6553 1.34517C25.3097 0.942205 26.0674 0.740723 26.9284 0.740723C28.0305 0.740723 28.8915 1.02616 29.5114 1.59702C30.1314 2.1343 30.4586 2.8227 30.493 3.66221C30.5274 4.46813 30.2347 5.30764 29.6148 6.18072L17.5777 22.9541L19.1792 18.4711V33.0785C19.1792 35.7985 17.8532 37.1585 15.2013 37.1585Z" fill="#FF7020" />
                            <path d="M42.2665 37.2592C39.5457 37.2592 37.1693 36.7388 35.1373 35.6978C33.1397 34.6568 31.5899 33.1625 30.4877 31.2148C29.3856 29.2671 28.8346 26.9669 28.8346 24.3141C28.8346 22.3328 29.1446 20.5531 29.7645 18.9748C30.3844 17.3965 31.2799 16.0533 32.4509 14.9452C33.6563 13.8034 35.0856 12.9471 36.7388 12.3763C38.3919 11.7718 40.2345 11.4696 42.2665 11.4696C44.9873 11.4696 47.3465 11.9901 49.3441 13.0311C51.3761 14.0721 52.9431 15.5496 54.0452 17.4637C55.1818 19.3778 55.7501 21.6612 55.7501 24.3141C55.7501 26.3289 55.4229 28.1254 54.7685 29.7037C54.1486 31.282 53.2531 32.642 52.0821 33.7837C50.9111 34.9254 49.4818 35.7985 47.7942 36.403C46.1411 36.9738 44.2985 37.2592 42.2665 37.2592ZM42.2665 31.5674C43.403 31.5674 44.3846 31.2987 45.2112 30.7615C46.0378 30.2242 46.6921 29.435 47.1743 28.3941C47.6565 27.3195 47.8976 25.9595 47.8976 24.3141C47.8976 21.8627 47.3809 20.0662 46.3477 18.9244C45.3145 17.7491 43.9541 17.1615 42.2665 17.1615C41.1644 17.1615 40.1828 17.4133 39.3218 17.917C38.4952 18.4207 37.8409 19.2099 37.3587 20.2844C36.911 21.3254 36.6871 22.6686 36.6871 24.3141C36.6871 26.7654 37.2037 28.5955 38.2369 29.8044C39.2701 30.9797 40.6133 31.5674 42.2665 31.5674Z" fill="#FF7020" />
                            <path d="M69.8467 37.2592C67.7114 37.2592 65.9377 36.8731 64.5256 36.1007C63.1135 35.3284 62.0631 34.1699 61.3743 32.6252C60.7199 31.0469 60.3927 29.0992 60.3927 26.7822V15.3985C60.3927 14.1225 60.7199 13.1654 61.3743 12.5274C62.0631 11.8894 63.0274 11.5704 64.2673 11.5704C65.5072 11.5704 66.4715 11.8894 67.1603 12.5274C67.8491 13.1654 68.1935 14.1225 68.1935 15.3985V26.9837C68.1935 28.4612 68.5035 29.5694 69.1234 30.3081C69.7434 31.0133 70.7249 31.3659 72.0681 31.3659C73.5491 31.3659 74.7545 30.8622 75.6844 29.8548C76.6487 28.8138 77.1309 27.4538 77.1309 25.7748V15.3985C77.1309 14.1225 77.4581 13.1654 78.1125 12.5274C78.8013 11.8894 79.7656 11.5704 81.0055 11.5704C82.2798 11.5704 83.2441 11.8894 83.8985 12.5274C84.5873 13.1654 84.9317 14.1225 84.9317 15.3985V33.28C84.9317 35.8657 83.6747 37.1585 81.1605 37.1585C79.9206 37.1585 78.9735 36.8227 78.3191 36.1511C77.6647 35.4795 77.3376 34.5225 77.3376 33.28V29.9052L78.1125 31.8696C77.3548 33.5822 76.2699 34.9086 74.8578 35.8489C73.4457 36.7891 71.7754 37.2592 69.8467 37.2592Z" fill="#FF7020" />
                            <path d="M94.9976 37.1585C93.6889 37.1585 92.6901 36.8227 92.0013 36.1511C91.3124 35.4795 90.968 34.5225 90.968 33.28V15.3985C90.968 14.156 91.2952 13.2158 91.9496 12.5778C92.6384 11.9062 93.5855 11.5704 94.791 11.5704C96.0308 11.5704 96.9779 11.9062 97.6323 12.5778C98.2867 13.2158 98.6139 14.156 98.6139 15.3985V18.0178H98.0973C98.5106 16.0029 99.4232 14.4415 100.835 13.3333C102.247 12.2252 104.073 11.6039 106.311 11.4696C107.172 11.4025 107.827 11.6207 108.275 12.1244C108.757 12.5946 109.015 13.3837 109.049 14.4918C109.118 15.5328 108.894 16.3555 108.378 16.96C107.896 17.5644 107.069 17.9338 105.898 18.0681L104.71 18.1689C102.747 18.3368 101.283 18.8908 100.319 19.8311C99.3888 20.7713 98.9239 22.1313 98.9239 23.9111V33.28C98.9239 34.5225 98.5794 35.4795 97.8906 36.1511C97.2363 36.8227 96.2719 37.1585 94.9976 37.1585Z" fill="#FF7020" />
                            <path d="M116.649 37.1585C115.478 37.1585 114.583 36.8395 113.963 36.2015C113.343 35.5634 113.033 34.6736 113.033 33.5318V4.36739C113.033 3.22566 113.36 2.33578 114.015 1.69776C114.703 1.05973 115.633 0.740723 116.804 0.740723C117.837 0.740723 118.647 0.942205 119.232 1.34517C119.852 1.71455 120.421 2.36937 120.937 3.30961L132.871 24.5659H131.114L143.048 3.30961C143.565 2.36937 144.116 1.71455 144.701 1.34517C145.321 0.942205 146.131 0.740723 147.129 0.740723C148.3 0.740723 149.196 1.05973 149.816 1.69776C150.47 2.33578 150.797 3.22566 150.797 4.36739V33.5318C150.797 34.6736 150.487 35.5634 149.867 36.2015C149.247 36.8395 148.352 37.1585 147.181 37.1585C146.01 37.1585 145.097 36.8395 144.443 36.2015C143.823 35.5634 143.513 34.6736 143.513 33.5318V13.1318H144.65L135.041 29.9052C134.627 30.5432 134.18 31.0301 133.697 31.3659C133.25 31.6681 132.647 31.8192 131.889 31.8192C131.132 31.8192 130.512 31.6513 130.03 31.3155C129.547 30.9797 129.117 30.5096 128.738 29.9052L119.026 13.0815H120.266V33.5318C120.266 34.6736 119.956 35.5634 119.336 36.2015C118.75 36.8395 117.855 37.1585 116.649 37.1585Z" fill="#FF7020" />
                            <path d="M170.686 37.2592C167.689 37.2592 165.106 36.7388 162.936 35.6978C160.801 34.6232 159.148 33.1289 157.977 31.2148C156.84 29.2671 156.272 26.9837 156.272 24.3644C156.272 21.8123 156.823 19.5792 157.925 17.6652C159.027 15.7175 160.56 14.2064 162.523 13.1318C164.521 12.0237 166.777 11.4696 169.291 11.4696C171.116 11.4696 172.769 11.7718 174.25 12.3763C175.731 12.9471 177.006 13.7867 178.073 14.8948C179.141 15.9694 179.95 17.2958 180.501 18.8741C181.052 20.4187 181.328 22.1481 181.328 24.0622C181.328 24.7002 181.121 25.1871 180.708 25.5229C180.295 25.8252 179.692 25.9763 178.9 25.9763H162.678V22.0474H175.697L174.87 22.7526C174.87 21.3758 174.664 20.2341 174.25 19.3274C173.837 18.3871 173.234 17.682 172.442 17.2118C171.684 16.7417 170.737 16.5066 169.601 16.5066C168.326 16.5066 167.242 16.7921 166.346 17.3629C165.451 17.9338 164.762 18.7565 164.28 19.8311C163.797 20.9057 163.556 22.1985 163.556 23.7096V24.1126C163.556 26.6647 164.159 28.5452 165.365 29.7541C166.604 30.9629 168.43 31.5674 170.841 31.5674C171.667 31.5674 172.614 31.4666 173.682 31.2652C174.75 31.0637 175.748 30.7447 176.678 30.3081C177.47 29.9387 178.176 29.8212 178.796 29.9555C179.416 30.0563 179.899 30.3249 180.243 30.7615C180.587 31.198 180.777 31.7017 180.811 32.2726C180.88 32.8434 180.76 33.4143 180.45 33.9852C180.14 34.5225 179.623 34.9758 178.9 35.3452C177.729 35.9832 176.403 36.4533 174.922 36.7555C173.475 37.0913 172.063 37.2592 170.686 37.2592Z" fill="#FF7020" />
                            <path d="M194.441 37.2592C192.581 37.2592 190.911 36.9067 189.43 36.2015C187.949 35.4963 186.795 34.5392 185.968 33.3304C185.142 32.1215 184.729 30.7615 184.729 29.2504C184.729 27.437 185.211 26.0099 186.175 24.9689C187.139 23.8943 188.706 23.1387 190.876 22.7022C193.046 22.2321 195.922 21.997 199.504 21.997H202.242V25.9259H199.555C197.799 25.9259 196.37 26.0266 195.267 26.2281C194.2 26.396 193.425 26.6983 192.943 27.1348C192.495 27.5713 192.271 28.1758 192.271 28.9481C192.271 29.8884 192.598 30.6607 193.253 31.2652C193.941 31.8696 194.923 32.1718 196.197 32.1718C197.196 32.1718 198.074 31.9536 198.832 31.517C199.624 31.0469 200.244 30.4257 200.692 29.6533C201.14 28.8474 201.363 27.9407 201.363 26.9333V21.1407C201.363 19.6632 201.019 18.6222 200.33 18.0178C199.641 17.3797 198.47 17.0607 196.817 17.0607C195.887 17.0607 194.871 17.1783 193.769 17.4133C192.702 17.6148 191.513 17.9674 190.205 18.4711C189.447 18.8069 188.775 18.8908 188.19 18.7229C187.604 18.5215 187.157 18.1857 186.847 17.7155C186.537 17.2118 186.382 16.6746 186.382 16.1037C186.382 15.4992 186.554 14.9284 186.898 14.3911C187.243 13.8202 187.811 13.4005 188.603 13.1318C190.222 12.4938 191.737 12.0573 193.149 11.8222C194.596 11.5871 195.922 11.4696 197.127 11.4696C199.779 11.4696 201.949 11.8558 203.637 12.6281C205.359 13.3669 206.65 14.5254 207.511 16.1037C208.372 17.6484 208.803 19.6464 208.803 22.0978V33.28C208.803 34.5225 208.493 35.4795 207.873 36.1511C207.253 36.8227 206.357 37.1585 205.186 37.1585C204.015 37.1585 203.103 36.8227 202.448 36.1511C201.828 35.4795 201.518 34.5225 201.518 33.28V31.4163L201.88 31.7185C201.673 32.8602 201.226 33.8508 200.537 34.6904C199.883 35.4963 199.039 36.1343 198.005 36.6044C196.972 37.041 195.784 37.2592 194.441 37.2592Z" fill="#FF7020" />
                            <path d="M223.766 37.2592C220.701 37.2592 218.41 36.4365 216.895 34.7911C215.38 33.1121 214.622 30.6271 214.622 27.3363V4.61924C214.622 3.34319 214.949 2.38616 215.603 1.74813C216.292 1.07653 217.274 0.740723 218.548 0.740723C219.788 0.740723 220.735 1.07653 221.389 1.74813C222.078 2.38616 222.423 3.34319 222.423 4.61924V27.0341C222.423 28.4108 222.715 29.435 223.301 30.1066C223.921 30.7447 224.73 31.0637 225.729 31.0637C226.005 31.0637 226.263 31.0469 226.504 31.0133C226.745 30.9797 227.003 30.9629 227.279 30.9629C227.83 30.8958 228.209 31.0637 228.415 31.4667C228.656 31.836 228.777 32.5916 228.777 33.7333C228.777 34.7407 228.57 35.5131 228.157 36.0504C227.744 36.5541 227.107 36.8899 226.246 37.0578C225.901 37.0913 225.505 37.1249 225.057 37.1585C224.61 37.2257 224.179 37.2592 223.766 37.2592Z" fill="#FF7020" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                            <path d="M53.1212 15.326L58.6968 15.1498V34.8809H51.9707L53.1212 15.326Z" fill="white" />
                            <ellipse cx="35.952" cy="49.3269" rx="6.63755" ry="8.4562" fill="white" />
                            <path d="M23.7742 21.7562C23.7742 26.4264 20.537 25.6319 16.8712 25.6319C13.2054 25.6319 10.7646 24.3987 10.7646 22.7251C10.7646 18.0549 13.4709 17.44 17.1367 17.44C20.8025 17.44 23.7742 17.0859 23.7742 21.7562Z" fill="white" />
                            <path d="M7.46683 6.58261C7.14014 6.7647 6.70891 7.15489 6.48676 7.45403L6.09473 8.01331V14.9847V21.9691L6.43449 22.8406C7.66285 25.9751 10.3025 28.0561 13.478 28.3813L14.3274 28.4723L14.3927 44.21L14.458 59.9477L14.7455 60.416C14.9154 60.6761 15.2944 61.0533 15.5949 61.2614C16.0784 61.5995 16.2483 61.6385 17.1369 61.6385C18.0124 61.6385 18.1954 61.5995 18.6528 61.2874C18.9272 61.0923 19.3061 60.7151 19.4891 60.442L19.8158 59.9607L19.8811 44.223L19.9465 28.4723L20.7959 28.3813C24.0497 28.0561 26.8985 25.728 27.8916 22.6195C28.1791 21.722 28.1791 21.5789 28.1791 14.8677V8.02631L27.8263 7.51907C27.2513 6.71267 26.6502 6.3745 25.644 6.32248C24.5724 6.27045 23.8014 6.62163 23.2134 7.45403L22.8213 8.01331L22.756 11.2779L22.6907 14.5555H21.3186H19.9465L19.8811 11.2909C19.8158 8.07834 19.8158 8.02631 19.4891 7.55808C18.9402 6.73868 18.2738 6.3745 17.2807 6.32248C16.2091 6.27045 15.4381 6.62163 14.8501 7.45403L14.458 8.01331L14.3927 11.2779L14.3274 14.5555H12.9553H11.5831L11.5178 11.2909L11.4525 8.02631L11.0996 7.51907C10.5247 6.71267 9.92355 6.3745 8.91734 6.32248C8.19862 6.28346 7.95034 6.33549 7.46683 6.58261ZM22.6253 20.4734C22.6253 21.2668 21.985 22.1382 21.0572 22.6325C20.639 22.8536 20.2731 22.8796 17.1369 22.8796C13.8439 22.8796 13.6478 22.8666 13.1513 22.5934C12.2627 22.1252 11.6485 21.2538 11.6485 20.4734V20.0832H17.1369H22.6253V20.4734Z" fill="#FF7020" />
                            <path d="M34.5563 6.58261C34.2296 6.7647 33.7984 7.15489 33.5763 7.45403L33.1842 8.01331L33.1189 22.5154L33.0536 37.0175L31.9559 37.3427C29.2117 38.123 27.16 39.7618 26.0101 42.064C25.0039 44.106 24.834 44.9514 24.834 47.9168C24.834 50.0889 24.8732 50.6092 25.1084 51.5586C26.389 56.5921 29.2247 60.0258 33.1842 61.3394C33.9552 61.5865 34.3734 61.6385 35.8631 61.6385C37.3528 61.6385 37.771 61.5865 38.542 61.3394C42.5015 60.0258 45.3372 56.5921 46.6178 51.5586C46.853 50.6092 46.8922 50.0889 46.8922 47.9168C46.8922 45.7318 46.853 45.2375 46.6047 44.3401C45.6247 40.7373 43.2855 38.3442 39.7703 37.3427L38.6726 37.0175L38.6073 22.5284L38.542 8.02631L38.1891 7.51907C37.6142 6.71267 37.0131 6.37451 36.0068 6.32248C35.2881 6.28346 35.0398 6.33549 34.5563 6.58261ZM38.4374 42.7143C39.901 43.2085 40.855 44.3401 41.2208 45.9789C41.4691 47.1104 41.3254 49.9458 40.9595 51.1034C40.28 53.2364 38.9863 55.0313 37.588 55.7337C36.7125 56.1759 35.0268 56.1889 34.1643 55.7467C32.6746 54.9793 31.4724 53.3145 30.7406 51.0384C30.4792 50.1799 30.44 49.8028 30.44 47.9168C30.44 45.8228 30.4531 45.7578 30.819 44.9514C31.4724 43.5467 32.8053 42.6363 34.5563 42.4021C34.5563 42.4021 37.6272 42.4542 38.4374 42.7143Z" fill="#FF7020" />
                            <path d="M59.7515 6.53058C58.0788 7.40201 55.4914 9.76917 53.8972 11.8632C49.9246 17.1308 47.6116 24.5704 47.0759 33.87C46.8798 37.2776 46.9713 37.7849 47.873 38.6823C48.7485 39.5537 48.9837 39.5928 53.9495 39.5928H58.2095V49.6467V59.7136L58.5101 60.2599C58.6669 60.572 59.0589 61.0012 59.3725 61.2354C59.8822 61.5995 60.0129 61.6385 60.9407 61.6385C61.8293 61.6385 62.0122 61.5995 62.4696 61.2874C62.744 61.0923 63.123 60.7151 63.3059 60.442L63.6326 59.9607V34V8.02631L63.2798 7.51907C62.7048 6.69967 62.1037 6.3745 61.0975 6.32248C60.4441 6.29647 60.1174 6.33549 59.7515 6.53058ZM58.2095 24.7655V34H55.4392H52.6819L52.7734 32.6604C53.0086 29.0836 53.8841 24.7655 55.021 21.5789C55.7789 19.4719 57.8175 15.531 58.1442 15.531C58.1834 15.531 58.2095 19.68 58.2095 24.7655Z" fill="#FF7020" />
                        </svg>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__number-box">
                            <div className="footer__number-title">Order number</div>
                            <div className="footer__number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_57_2668)">
                                        <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_57_2668">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>(650) 488-0533</span>
                            </div>
                        </div>
                        <div className="footer__social-box">
                            <div className="footer__social-title">We're on social</div>
                            <div className="footer__social">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <g clip-path="url(#clip0_57_2678)">
                                        <path d="M36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 0 22.7739 0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18ZM18.6458 13.2885C16.8952 14.0175 13.3942 15.525 8.14725 17.811C7.29675 18.1485 6.849 18.4815 6.8085 18.8055C6.741 19.3522 7.42725 19.5683 8.361 19.863L8.75475 19.9868C9.67275 20.286 10.9102 20.6348 11.5515 20.6483C12.1365 20.6618 12.7867 20.4233 13.5045 19.9283C18.4072 16.6185 20.9385 14.9467 21.096 14.9107C21.2085 14.8837 21.366 14.8523 21.4695 14.9468C21.5752 15.039 21.564 15.2168 21.5528 15.264C21.4853 15.5542 18.792 18.0562 17.3993 19.3522C16.965 19.7572 16.6567 20.043 16.5938 20.1082C16.455 20.25 16.314 20.3895 16.1707 20.5268C15.3157 21.3503 14.6768 21.9668 16.2045 22.9748C16.9403 23.4608 17.5298 23.859 18.117 24.2595C18.756 24.696 19.395 25.1303 20.223 25.6748C20.4322 25.8098 20.6348 25.956 20.8305 26.0955C21.5753 26.6265 22.248 27.1035 23.0737 27.027C23.5553 26.982 24.0525 26.532 24.3045 25.182C24.9007 21.9938 26.073 15.0885 26.343 12.2423C26.3595 12.0056 26.3497 11.7679 26.3137 11.5335C26.2926 11.3443 26.201 11.17 26.0573 11.0452C25.8525 10.9039 25.6085 10.8307 25.3597 10.836C24.6847 10.8472 23.643 11.2095 18.6458 13.2885Z" fill="#FF7020" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_57_2678">
                                            <rect width="36" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <g clip-path="url(#clip0_57_2676)">
                                        <path d="M18 0C8.05875 0 0 8.05875 0 18C0 27.9412 8.05875 36 18 36C27.9412 36 36 27.9412 36 18C36 8.05875 27.9412 0 18 0ZM24.9225 20.3081C24.9225 20.3081 26.5144 21.8794 26.9062 22.6087C26.9175 22.6237 26.9231 22.6387 26.9269 22.6462C27.0862 22.9144 27.1237 23.1225 27.045 23.2781C26.9137 23.5369 26.4637 23.6644 26.31 23.6756H23.4975C23.3025 23.6756 22.8937 23.625 22.3987 23.2837C22.0181 23.0175 21.6431 22.5806 21.2775 22.155C20.7319 21.5212 20.2594 20.9738 19.7831 20.9738C19.7226 20.9736 19.6625 20.9831 19.605 21.0019C19.245 21.1181 18.7838 21.6319 18.7838 23.0006C18.7838 23.4281 18.4462 23.6737 18.2081 23.6737H16.92C16.4812 23.6737 14.1956 23.52 12.1706 21.3844C9.69187 18.7687 7.46062 13.5225 7.44187 13.4737C7.30125 13.1344 7.59187 12.9525 7.90875 12.9525H10.7494C11.1281 12.9525 11.2519 13.1831 11.3381 13.3875C11.4394 13.6256 11.8106 14.5725 12.42 15.6375C13.4081 17.3737 14.0138 18.0787 14.4994 18.0787C14.5904 18.0777 14.6799 18.0545 14.76 18.0112C15.3937 17.6587 15.2756 15.3994 15.2475 14.9306C15.2475 14.8425 15.2456 13.92 14.9212 13.4775C14.6887 13.1569 14.2931 13.035 14.0531 12.99C14.1503 12.856 14.2782 12.7473 14.4262 12.6731C14.8612 12.4556 15.645 12.4237 16.4231 12.4237H16.8563C17.7 12.435 17.9175 12.4894 18.2231 12.5662C18.8419 12.7144 18.855 13.1137 18.8006 14.4806C18.7838 14.8687 18.7669 15.3075 18.7669 15.825C18.7669 15.9375 18.7612 16.0575 18.7612 16.185C18.7425 16.8806 18.72 17.67 19.2112 17.9944C19.2753 18.0346 19.3494 18.056 19.425 18.0562C19.5956 18.0562 20.1094 18.0562 21.5006 15.6694C21.9297 14.9011 22.3025 14.1028 22.6162 13.2806C22.6444 13.2319 22.7269 13.0819 22.8244 13.0237C22.8963 12.9871 22.9761 12.9684 23.0569 12.9694H26.3962C26.76 12.9694 27.0094 13.0237 27.0562 13.1644C27.1387 13.3875 27.0412 14.0681 25.5169 16.1325L24.8362 17.0306C23.4544 18.8419 23.4544 18.9338 24.9225 20.3081Z" fill="#FF7020" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_57_2676">
                                            <rect width="36" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}