/**
 * @name Furcord
 * @author KontrollFreek
 * @description A plugin for the fluffiest of users.
 * @version 1.0.0
 * @authorId 506101469787717658
 * @authorLink https://twitter.com/KontrollFreek
 * @donate https://ko-fi.com/KontrollFreek
 * @website https://github.com/KontrollFreek/furcord
 * @source https://github.com/KontrollFreek/furcord
 */

let DirectMessages = document.querySelector('[aria-label="Direct Messages"] div')
let AppSpinner = document.querySelector('[data-testid="app-spinner"]')

module.exports = meta => ({
    start() {        
        DirectMessages.innerHTML = '<svg viewBox="66.499 66.803 433.602 440.935" xmlns="http://www.w3.org/2000/svg"><path style="fill-rule: evenodd; fill: currentColor;" d="M 216.18 452.623 C 216.18 452.623 215.394 456.904 185.824 448.253 C 156.254 439.602 121.023 424.836 121.023 424.836 C 121.023 424.836 102.935 418.073 103.407 406.277 C 103.879 394.481 102.935 379.695 112.372 346.98 C 121.809 314.265 123.382 314.107 123.382 314.107 C 130.013 225.335 183.784 112.197 206.081 96.766 C 206.081 96.766 210.747 93.655 227.544 128.805 C 244.341 163.955 251.993 214.057 251.993 214.057 C 251.993 214.057 267.671 210.823 280.736 210.822 C 293.801 210.821 315.266 212.321 315.266 212.321 L 346.719 193.808 C 346.719 193.808 387.182 168.154 414.88 140.81 C 419.241 136.095 431.066 170.373 431.066 170.373 C 431.712 170.373 443.484 209.055 444.058 211.348 C 449.743 234.073 428.107 261.264 428.106 261.264 C 450.279 247.499 443.992 259.234 435.524 269.83 C 427.056 280.426 424.744 282.478 424.744 282.479 C 424.652 282.502 424.917 293.907 433.842 318.072 C 442.767 342.237 447.825 361.729 453.796 369.763 C 442.699 389.223 430.904 404.09 430.904 404.09 C 430.904 404.09 419.969 421.045 395.642 434.438 C 371.315 447.831 365.652 448.575 365.652 448.575 L 344.876 413.445 C 344.876 413.445 384.435 398.381 398.694 369.488 L 394.692 367.486 C 394.692 367.486 379.008 410.133 300.996 413.583 C 222.984 417.033 203.115 396.244 174.694 381.628 L 173.534 383.605 C 173.534 383.605 180.818 397.079 233.634 415.012 C 233.634 415.012 238.308 415.856 227.595 433.458 C 218.045 449.149 219.294 447.935 216.18 452.623 Z M 215.266 164.718 C 216.674 156.532 219.315 163.75 219.315 163.75 L 232.431 219.811 L 238.932 217.774 C 237.76 199.702 225.965 154.94 224.448 149.909 C 222.931 144.878 215.435 122.552 209.686 136.59 C 203.937 150.628 190.32 219.616 191.552 232.844 L 201.26 228.741 C 213.858 172.904 201.282 228.842 215.266 164.718 Z M 423.193 216.119 C 423.729 214.306 425.231 214.506 425.657 216.007 L 428.01 232.699 C 428.01 232.699 433.436 226.005 432.603 221.969 C 431.77 217.933 422.017 186.975 418.711 194.583 C 415.405 202.191 413.322 237.798 390.367 256.537 L 400.002 266.508 C 418.79 240.173 422.657 217.932 423.193 216.119 Z M 180.929 315.717 C 180.929 315.717 230.158 348.031 269.037 353.585 C 269.037 353.585 288.476 303.094 247.83 286.179 C 207.184 269.264 180.172 310.92 180.929 315.717 Z M 381.581 344.715 C 384.826 342.945 386.691 326.277 385.232 327.215 C 383.733 325.715 347.154 334.63 340.664 338.294 L 376.836 310.275 C 380.025 309.939 375.48 285.198 372.291 285.534 C 347.763 290.646 320.376 331.827 323.82 346.32 L 329.626 354.651 C 332.565 355.144 377.387 347.003 381.581 344.715 Z M 283.271 343.556 C 277.329 348.193 277.464 356.156 279.37 360.882 C 279.37 360.882 279.14 397.113 292.105 401.817 C 305.07 406.521 305.874 392.982 315.626 370.15 C 320.532 368.714 325.311 365.746 325.892 362.25 C 326.473 358.754 325.025 358.415 325.026 358.411 C 325.027 358.407 321.749 364.155 316.514 363.781 C 311.279 363.407 305.797 359.751 304.841 357.757 C 304.841 357.757 283.904 362.397 283.156 354.338 C 283.156 354.338 283.115 348.286 286.064 344.464 C 286.849 343.623 286.257 341.226 283.271 343.556 Z"/></svg>'
        DirectMessages.style.padding = '4px 2px 2px 4px'
    },

    stop() {
        DirectMessages.innerHTML = '<svg class="homeIcon-r0w4ny" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20"><path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path></svg>'
        DirectMessages.style.padding = ''
    }
})
