"use client";

export default function ReplyComment({ currentUser }) {
  return (
    <form>
      <div className="p-5 bg-white rounded-md shadow-lg shadow-[#f4f4f4] mb-5">
        <div className="flex">
          <div className="mr-3">
            <img src={currentUser.image.png} className="w-[45px]" />
          </div>
          <div className="w-full mr-3">
            <textarea
              rows="3"
              placeholder="Add a comment..."
              className="w-full p-3 py-2 rounded-lg border-[1.5px] text-[14px] border-[#e4dddd]"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[var(--moderate-blue-color)] hover:bg-[var(--light-grayish-blue-color)] font-medium text-white rounded-lg px-6 py-2 text-[13px]"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
