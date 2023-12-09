"use client";

export default function Comment({ comment, currentUser, setModalStatus }) {
  return (
    <div className="p-5 bg-white rounded-md shadow-lg shadow-[#f4f4f4] mb-5">
      <div className="flex">
        <div className="mr-4">
          <div className="rounded-lg leading-[0] text-center bg-[#f5f6fa] p-2 px-[10px] flex flex-col">
            <div className="mb-7 pt-1 font-semibold text-[var(--light-grayish-blue-color)] hover:text-[var(--moderate-blue-color)] cursor-pointer">
              +
            </div>
            <div className="font-semibold text-[12px] text-[var(--moderate-blue-color)] mb-6">
              {comment.score}
            </div>
            <div className="text-[18px] text-center pb-1 pt-1 font-medium scale-x-[1.3] text-[var(--light-grayish-blue-color)] hover:text-[var(--moderate-blue-color)] cursor-pointer">
              -
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="flex items-center w-full">
              <div className="mr-3">
                <img className="w-[27px]" src={comment.user.image.png} />
              </div>
              <div className="text-[#2d323e] font-semibold text-[13px] mr-3">
                {comment.user.username}
              </div>
              {comment.user.username == currentUser.username ? (
                <div className="bg-[var(--moderate-blue-color)] font-semibold px-[8px] py-[1px] text-[10px] text-white mr-3">
                  you
                </div>
              ) : null}
              <div className="text-[14px] text-[var(--light-gray-color)]">
                {comment.createdAt}
              </div>
            </div>
            <div className="w-[50%] flex justify-end items-end">
              {comment.user.username == currentUser.username ? (
                <div className="flex items-center hover-pale-red-color">
                  <div
                    className="flex group items-center mr-3 cursor-pointer"
                    onClick={() => setModalStatus(true)}
                  >
                    <div className="mr-2">
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                          fill="#ED6368"
                          className="group-hover:fill-[var(--pale-red-color)]"
                        />
                      </svg>
                    </div>
                    <div className="text-[var(--soft-red-color)] group-hover:text-[var(--pale-red-color)] font-semibold text-[14px]">
                      Delete
                    </div>
                  </div>
                  <div className="flex group items-center cursor-pointer">
                    <div className="mr-2">
                      <svg
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                          fill="#5357B6"
                          className="group-hover:fill-[var(--light-grayish-blue-color)]"
                        />
                      </svg>
                    </div>
                    <div className="text-[var(--moderate-blue-color)] group-hover:text-[var(--light-grayish-blue-color)] font-semibold text-[14px]">
                      Edit
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex group items-center cursor-pointer">
                  <div className="mr-2">
                    <svg
                      width="14"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                        fill="#5357B6"
                        className="group-hover:fill-[var(--light-grayish-blue-color)]"
                      />
                    </svg>
                  </div>
                  <div className="text-[var(--moderate-blue-color)] group-hover:text-[var(--light-grayish-blue-color)] font-semibold text-[14px]">
                    Reply
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="text-[var(--light-gray-color)] text-[14px] leading-[1.4] mt-3 pr-3">
            {comment.content}
          </div>
        </div>
      </div>
    </div>
  );
}
