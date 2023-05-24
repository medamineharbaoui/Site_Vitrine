const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-8 rounded-[20px]  max-w-[370px] feedback-card">
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
